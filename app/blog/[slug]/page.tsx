import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Phone } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts } from "@/lib/content"

export const revalidate = 60 // Revalidate every 60 seconds
export const dynamicParams = true // Allow dynamic params for posts not in generateStaticParams

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts()
    return posts.map((post: any) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A1628] to-[#0D1D35] text-white">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="space-y-6">
            {post.category && (
              <div>
                <span className="px-4 py-2 bg-[#00A878] text-white text-sm font-semibold rounded-full">
                  {post.category}
                </span>
              </div>
            )}

            <h1 className="font-serif text-4xl lg:text-6xl font-bold leading-tight">{post.title}</h1>

            {post.excerpt && <p className="text-xl text-white/80 leading-relaxed max-w-3xl">{post.excerpt}</p>}

            <div className="flex flex-wrap items-center gap-6 text-white/70 pt-4">
              {post.author && (
                <div className="flex items-center gap-2">
                  <span className="font-medium">By {post.author}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{post.published_at ? new Date(post.published_at).toLocaleDateString() : 'Recently'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.featured_image && (
        <section className="px-4 sm:px-6 lg:px-8 -mt-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image src={post.featured_image} alt={post.title} fill className="object-cover" />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-slate max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.body || '' }} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-16 p-10 bg-gradient-to-br from-[#0066B2] to-[#00A878] rounded-2xl text-white text-center">
            <h3 className="font-serif text-4xl font-bold mb-4">Need Legal Help?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              If you've been injured, don't wait. Contact The Costello Law Group today for your free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#0066B2] hover:bg-white/90 text-lg px-8 py-6">
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent text-lg px-8 py-6"
              >
                <Link href="tel:+19545918099">
                  <Phone className="h-5 w-5 mr-2" />
                  (954) 591-8099
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Schema Markup */}
      {post.seo && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.seo.title || post.title,
              description: post.seo.description || post.excerpt,
              author: {
                "@type": "Person",
                name: post.author || "Joshua Costello",
              },
              publisher: {
                "@type": "LegalService",
                name: "The Costello Law Group",
              },
              datePublished: post.published_at,
            }),
          }}
        />
      )}

      <Footer />
    </div>
  )
}
