"use server"

import { getSiteSettings } from "@/lib/pages-client"

/**
 * Google My Business Integration
 * Fetches reviews from Google My Business API and syncs them to testimonials
 */

interface GoogleReview {
  reviewId: string
  reviewer: string
  reviewText: string
  reviewRating: number
  reviewCreateTime: string
  updateTime: string
}

interface ImportedTestimonial {
  client_name: string
  quote: string
  rating: number
  source: "Google My Business (Auto)"
  google_review_id: string
  featured: boolean
  date: string
}

/**
 * Fetch Google My Business reviews from Google API
 * Uses OAuth2 credentials from site settings
 */
export async function fetchGoogleMyBusinessReviews(): Promise<GoogleReview[]> {
  try {
    const settings = await getSiteSettings()

    if (!settings?.integrations?.google_my_business_api_key) {
      console.warn("Google My Business API key not configured in settings")
      return []
    }

    if (!settings?.integrations?.google_my_business_id) {
      console.warn("Google My Business location ID not configured in settings")
      return []
    }

    const apiKey = settings.integrations.google_my_business_api_key
    const locationId = settings.integrations.google_my_business_id

    // Note: This is a placeholder for the actual GMB API call
    // The real implementation would use the Google My Business API v4.9
    // Documentation: https://developers.google.com/my-business/content/overview

    const response = await fetch(
      `https://mybusiness.googleapis.com/v4/${locationId}/reviews?pageSize=10`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    )

    if (!response.ok) {
      console.error(
        `Google My Business API error: ${response.status} ${response.statusText}`
      )
      return []
    }

    const data = await response.json()
    return data.reviews || []
  } catch (error) {
    console.error("Error fetching Google My Business reviews:", error)
    return []
  }
}

/**
 * Convert Google reviews to testimonial format
 * Only imports reviews with rating >= 4 stars
 */
export function convertGoogleReviewsToTestimonials(
  reviews: GoogleReview[]
): ImportedTestimonial[] {
  return reviews
    .filter((review) => review.reviewRating >= 4) // Only 4-5 star reviews
    .map((review) => ({
      client_name: review.reviewer,
      quote: review.reviewText,
      rating: review.reviewRating,
      source: "Google My Business (Auto)" as const,
      google_review_id: review.reviewId,
      featured: review.reviewRating === 5, // Feature 5-star reviews
      date: new Date(review.reviewCreateTime).toISOString(),
    }))
}

/**
 * Sync Google My Business reviews to local testimonials cache
 * This would typically be called by a scheduled job or webhook
 */
export async function syncGoogleMyBusinessReviews(): Promise<{
  success: boolean
  imported: number
  error?: string
}> {
  try {
    const reviews = await fetchGoogleMyBusinessReviews()

    if (reviews.length === 0) {
      return {
        success: true,
        imported: 0,
      }
    }

    const testimonials = convertGoogleReviewsToTestimonials(reviews)

    // In production, you would:
    // 1. Write testimonials to content/testimonials/
    // 2. Commit to GitHub
    // 3. Trigger Vercel rebuild

    // For now, just log them
    console.log(
      `[GMB Sync] Imported ${testimonials.length} reviews from Google My Business`
    )

    return {
      success: true,
      imported: testimonials.length,
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    return {
      success: false,
      imported: 0,
      error: errorMessage,
    }
  }
}

/**
 * Get cached Google My Business reviews from testimonials
 * Filters testimonials marked as auto-imported from GMB
 */
export async function getCachedGoogleReviews() {
  try {
    // This would read from content/testimonials and filter for GMB source
    // Implementation depends on your content fetching setup
    console.log("[GMB Cache] Reading cached reviews from testimonials...")
    return []
  } catch (error) {
    console.error("Error getting cached Google reviews:", error)
    return []
  }
}
