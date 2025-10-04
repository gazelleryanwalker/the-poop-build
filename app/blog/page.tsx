import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  const blogPosts = [
    {
      _id: "1",
      title: "Understanding Your Rights After a Car Accident in Florida",
      slug: { current: "understanding-rights-car-accident-florida" },
      excerpt:
        "Learn about your legal rights and options after being involved in a car accident in Florida, including how to protect your claim.",
      mainImage: "/car-accident-legal-consultation.jpg",
      category: "Personal Injury",
      publishedAt: "2025-01-15",
      readTime: 8,
    },
    {
      _id: "2",
      title: "What to Do When Your Insurance Claim is Denied",
      slug: { current: "insurance-claim-denied-what-to-do" },
      excerpt:
        "Insurance companies often deny valid claims. Here's what you need to know about fighting back and getting the coverage you deserve.",
      mainImage: "/insurance-claim-denial.jpg",
      category: "Insurance Claims",
      publishedAt: "2025-01-10",
      readTime: 10,
    },
    {
      _id: "3",
      title: "PIP Claims in Florida: A Complete Guide",
      slug: { current: "pip-claims-florida-complete-guide" },
      excerpt:
        "Personal Injury Protection (PIP) insurance is mandatory in Florida. Learn how to maximize your PIP benefits and avoid common pitfalls.",
      mainImage: "/florida-pip-insurance.jpg",
      category: "Insurance",
      publishedAt: "2025-01-05",
      readTime: 12,
    },
    {
      _id: "4",
      title: "Premises Liability: When Property Owners Are Responsible",
      slug: { current: "premises-liability-property-owner-responsibility" },
      excerpt:
        "Property owners have a duty to maintain safe conditions. Discover when they can be held liable for injuries on their property.",
      mainImage: "/premises-liability-slip-and-fall.jpg",
      category: "Personal Injury",
      publishedAt: "2024-12-28",
      readTime: 9,
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">Industry News</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Expert legal advice and updates from The Costello Law Group serving Cooper City, Davie, Plantation, and
            Pembroke Pines
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post: any) => (
              <Card
                key={post._id}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.mainImage || "/placeholder.svg?height=400&width=600"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {post.category && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-accent text-white text-sm font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime || 10} min read</span>
                      </div>
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="inline-flex items-center text-primary font-semibold group-hover:text-accent group-hover:gap-2 transition-all"
                    >
                      Read Full Article <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
