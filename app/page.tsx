import { getAllTestimonials, getAllPracticeAreas, getPageBySlug } from "@/lib/content"
import HomePageClient from "./page-client"

export const revalidate = 60 // Revalidate every 60 seconds

export default async function HomePage() {
  // Fetch data from content files
  const testimonials = await getAllTestimonials()
  const practiceAreas = await getAllPracticeAreas()
  const homePageData = await getPageBySlug("home")

  return <HomePageClient testimonials={testimonials} practiceAreas={practiceAreas} homePageData={homePageData} />
}
