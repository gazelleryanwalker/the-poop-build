import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"

const blogPosts = {
  "personal-injury-lawyer-cooper-city": {
    title: "Your Trusted Personal Injury Lawyer in Cooper City, Florida",
    date: "January 15, 2025",
    readTime: "12 min read",
    category: "Personal Injury",
    image: "/cooper-city-florida-street-scene-with-palm-trees-a.jpg",
    location: "Cooper City, FL",
    content: [
      {
        type: "intro",
        heading: "Why Cooper City Residents Choose The Costello Law Group",
        text: "Cooper City, Florida, is a vibrant community known for its family-friendly atmosphere, excellent schools, and safe neighborhoods. However, accidents can happen anywhere, and when they do, residents need a personal injury lawyer who understands the unique challenges of pursuing claims in Broward County.",
        image: "/placeholder.svg?height=400&width=800&query=Cooper City Florida neighborhood with homes and palm trees",
      },
      {
        type: "content",
        heading: "Common Personal Injury Cases in Cooper City",
        subheading: "Car Accidents on Stirling Road and Griffin Road",
        text: "Cooper City's major thoroughfares, including Stirling Road and Griffin Road, see thousands of vehicles daily. Unfortunately, this high traffic volume leads to numerous car accidents each year. The Costello Law Group has successfully represented Cooper City residents in cases involving distracted driving, DUI-related collisions, intersection accidents, and highway accidents on the Florida Turnpike.",
        image: "/placeholder.svg?height=400&width=800&query=busy Florida street intersection with traffic",
        stats: [
          { label: "Cases Won", value: "100+" },
          { label: "Client Satisfaction", value: "98%" },
          { label: "Years Experience", value: "12+" },
        ],
      },
      {
        type: "results",
        heading: "Our Cooper City Results",
        cases: [
          { amount: "$850,000", description: "Car accident victim on Stirling Road" },
          { amount: "$425,000", description: "Slip and fall at local shopping center" },
          { amount: "$1.2 million", description: "Motorcycle accident on Griffin Road" },
          { amount: "$675,000", description: "Premises liability at Cooper City apartment complex" },
        ],
      },
      {
        type: "content",
        heading: "Understanding Florida Personal Injury Law",
        text: "In Florida, you generally have four years from the date of your injury to file a personal injury lawsuit. Florida follows a modified comparative negligence system, which means your compensation can be reduced if you're found partially at fault for your injuries. Our experienced attorneys know how to minimize your percentage of fault and maximize your compensation.",
        image: "/florida-courthouse-and-legal-scales-of-justice.jpg",
      },
      {
        type: "cta",
        heading: "What to Do After an Accident in Cooper City",
        steps: [
          "Seek immediate medical attention - your health is the top priority",
          "Report the accident to Cooper City Police Department",
          "Document everything with photos and witness information",
          "Contact The Costello Law Group before speaking with insurance adjusters",
        ],
      },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Your Trusted Personal Injury Lawyer in Cooper City, Florida",
      author: {
        "@type": "Person",
        name: "Joshua Costello",
        jobTitle: "Personal Injury Attorney",
      },
      publisher: {
        "@type": "LegalService",
        name: "The Costello Law Group",
        address: {
          "@type": "PostalAddress",
          streetAddress: "5846 S Flamingo Rd. Ste. 520",
          addressLocality: "Cooper City",
          addressRegion: "FL",
          postalCode: "33330",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "26.0581",
          longitude: "-80.2719",
        },
        areaServed: {
          "@type": "City",
          name: "Cooper City",
        },
      },
      datePublished: "2025-01-15",
      description:
        "Expert personal injury legal services in Cooper City, Florida. The Costello Law Group provides aggressive representation for accident victims with 12+ years of experience.",
    },
  },
  "davie-personal-injury-attorney": {
    title: "Davie Personal Injury Attorney: Fighting for Your Rights",
    date: "January 12, 2025",
    readTime: "11 min read",
    category: "Personal Injury",
    image: "/davie-florida-downtown-area-with-shops-and-palm-tr.jpg",
    location: "Davie, FL",
    content: [
      {
        type: "intro",
        heading: "Expert Personal Injury Representation in Davie",
        text: "Davie, Florida is home to Nova Southeastern University, beautiful parks, and a thriving community. When accidents happen in Davie, you need an attorney who knows the local courts, understands Broward County insurance practices, and has a proven track record of success.",
        image: "/placeholder.svg?height=400&width=800&query=Davie Florida community with western theme buildings",
      },
      {
        type: "content",
        heading: "Common Accidents in Davie",
        subheading: "University Area Accidents",
        text: "With thousands of students at Nova Southeastern University, the area around University Drive sees heavy pedestrian and vehicle traffic. We've successfully handled cases involving pedestrian accidents, bicycle accidents, and car accidents near the university campus.",
        image: "/placeholder.svg?height=400&width=800&query=Florida university campus with students walking",
        stats: [
          { label: "Davie Cases Won", value: "50+" },
          { label: "Average Settlement", value: "$285K" },
          { label: "Response Time", value: "24hrs" },
        ],
      },
      {
        type: "results",
        heading: "Our Davie Results",
        cases: [
          { amount: "$625,000", description: "Pedestrian accident near NSU campus" },
          { amount: "$380,000", description: "Slip and fall at Davie shopping plaza" },
          { amount: "$295,000", description: "Car accident on University Drive" },
          { amount: "$185,000", description: "Bicycle accident in residential area" },
        ],
      },
      {
        type: "content",
        heading: "Why Choose The Costello Law Group for Your Davie Case",
        text: "Joshua Costello has deep roots in Broward County and understands the unique challenges of Davie personal injury cases. From dealing with local insurance adjusters to navigating the Broward County court system, our experience makes the difference in maximizing your compensation.",
        image: "/professional-attorney-office-with-law-books.jpg",
      },
      {
        type: "cta",
        heading: "Free Consultation for Davie Residents",
        steps: [
          "Call (954) 591-8099 for immediate assistance",
          "Speak directly with Joshua Costello about your case",
          "Get expert advice on your legal options",
          "No fees unless we win your case",
        ],
      },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Davie Personal Injury Attorney: Fighting for Your Rights",
      author: {
        "@type": "Person",
        name: "Joshua Costello",
        jobTitle: "Personal Injury Attorney",
      },
      publisher: {
        "@type": "LegalService",
        name: "The Costello Law Group",
        address: {
          "@type": "PostalAddress",
          streetAddress: "5846 S Flamingo Rd. Ste. 520",
          addressLocality: "Cooper City",
          addressRegion: "FL",
          postalCode: "33330",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "26.0765",
          longitude: "-80.2523",
        },
        areaServed: {
          "@type": "City",
          name: "Davie",
        },
      },
      datePublished: "2025-01-12",
      description:
        "Experienced Davie personal injury attorney with 12+ years serving Broward County. Free consultation for accident victims.",
    },
  },
  "plantation-accident-lawyer": {
    title: "Plantation Accident Lawyer: Expert Legal Representation",
    date: "January 10, 2025",
    readTime: "13 min read",
    category: "Accidents",
    image: "/plantation-florida-downtown-with-shops-and-palm-tr.jpg",
    location: "Plantation, FL",
    content: [
      {
        type: "intro",
        heading: "Protecting Plantation Residents After Accidents",
        text: "Plantation, Florida is one of Broward County's most desirable communities, known for its excellent schools, beautiful parks, and thriving business district. When accidents occur in Plantation, residents need an attorney who understands local laws and has a proven track record of success.",
        image: "/placeholder.svg?height=400&width=800&query=Plantation Florida residential neighborhood with trees",
      },
      {
        type: "content",
        heading: "Types of Accidents We Handle in Plantation",
        subheading: "Shopping Center Accidents",
        text: "Plantation is home to numerous shopping centers including The Fountains and Plantation Marketplace. Slip and fall accidents, parking lot collisions, and premises liability cases are common. We've successfully represented clients injured at local businesses throughout Plantation.",
        image: "/placeholder.svg?height=400&width=800&query=Florida shopping center with stores and parking lot",
        stats: [
          { label: "Plantation Cases", value: "75+" },
          { label: "Success Rate", value: "98%" },
          { label: "Avg Recovery", value: "$310K" },
        ],
      },
      {
        type: "results",
        heading: "Our Plantation Results",
        cases: [
          { amount: "$725,000", description: "Car accident on University Drive" },
          { amount: "$485,000", description: "Slip and fall at Plantation shopping center" },
          { amount: "$365,000", description: "Premises liability at local business" },
          { amount: "$245,000", description: "Rear-end collision on Broward Boulevard" },
        ],
      },
      {
        type: "content",
        heading: "Local Knowledge Makes the Difference",
        text: "Joshua Costello's 12+ years of experience in Broward County means he knows the local judges, understands how Plantation insurance adjusters operate, and has relationships with area medical providers and expert witnesses. This local knowledge translates directly into better results for our clients.",
        image: "/florida-courtroom-with-judge-bench-and-attorney-ta.jpg",
      },
      {
        type: "cta",
        heading: "Get Help Today",
        steps: [
          "Contact us immediately after your accident",
          "Free case evaluation with no obligation",
          "We handle all communication with insurance companies",
          "No fees unless we recover compensation for you",
        ],
      },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Plantation Accident Lawyer: Expert Legal Representation",
      author: {
        "@type": "Person",
        name: "Joshua Costello",
        jobTitle: "Personal Injury Attorney",
      },
      publisher: {
        "@type": "LegalService",
        name: "The Costello Law Group",
        address: {
          "@type": "PostalAddress",
          streetAddress: "5846 S Flamingo Rd. Ste. 520",
          addressLocality: "Cooper City",
          addressRegion: "FL",
          postalCode: "33330",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "26.1276",
          longitude: "-80.2331",
        },
        areaServed: {
          "@type": "City",
          name: "Plantation",
        },
      },
      datePublished: "2025-01-10",
      description:
        "Expert accident lawyer serving Plantation, FL. 12+ years experience, 98% success rate. Free consultation for injury victims.",
    },
  },
  "pembroke-pines-injury-claims": {
    title: "Pembroke Pines Injury Claims: Maximizing Your Compensation",
    date: "January 8, 2025",
    readTime: "14 min read",
    category: "Insurance Claims",
    image: "/pembroke-pines-florida-city-center-with-modern-bui.jpg",
    location: "Pembroke Pines, FL",
    content: [
      {
        type: "intro",
        heading: "Navigating Personal Injury Claims in Pembroke Pines",
        text: "Pembroke Pines is one of South Florida's largest cities, with busy roads, shopping centers, and residential communities. When you're injured in Pembroke Pines, understanding the claims process and having experienced legal representation can make the difference between a low settlement and maximum compensation.",
        image: "/placeholder.svg?height=400&width=800&query=Pembroke Pines Florida residential area with palm trees",
      },
      {
        type: "content",
        heading: "The Personal Injury Claims Process",
        subheading: "What to Expect",
        text: "After an accident in Pembroke Pines, the insurance claims process can be overwhelming. Insurance companies often try to minimize payouts or deny valid claims. Our firm handles all aspects of your claim, from initial filing through settlement negotiations or trial if necessary.",
        image: "/placeholder.svg?height=400&width=800&query=insurance claim documents and paperwork on desk",
        stats: [
          { label: "Claims Handled", value: "200+" },
          { label: "Avg Settlement Increase", value: "340%" },
          { label: "Client Satisfaction", value: "98%" },
        ],
      },
      {
        type: "results",
        heading: "Our Pembroke Pines Results",
        cases: [
          { amount: "$895,000", description: "Multi-vehicle accident on Pines Boulevard" },
          { amount: "$565,000", description: "Slip and fall at Pembroke Lakes Mall" },
          { amount: "$425,000", description: "Premises liability at apartment complex" },
          { amount: "$315,000", description: "Car accident on Flamingo Road" },
        ],
      },
      {
        type: "content",
        heading: "Maximizing Your Compensation",
        text: "Insurance companies often make low initial offers hoping you'll accept before consulting an attorney. We've seen countless cases where initial offers were 10-20% of what we ultimately recovered. Our aggressive negotiation tactics and willingness to go to trial when necessary ensure you receive maximum compensation.",
        image: "/attorney-negotiating-with-insurance-adjuster.jpg",
      },
      {
        type: "cta",
        heading: "Don't Accept a Low Settlement",
        steps: [
          "Get your claim reviewed by an experienced attorney",
          "Understand the true value of your case",
          "Let us handle all negotiations with insurance companies",
          "No fees unless we increase your settlement",
        ],
      },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Pembroke Pines Injury Claims: Maximizing Your Compensation",
      author: {
        "@type": "Person",
        name: "Joshua Costello",
        jobTitle: "Personal Injury Attorney",
      },
      publisher: {
        "@type": "LegalService",
        name: "The Costello Law Group",
        address: {
          "@type": "PostalAddress",
          streetAddress: "5846 S Flamingo Rd. Ste. 520",
          addressLocality: "Cooper City",
          addressRegion: "FL",
          postalCode: "33330",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "26.0098",
          longitude: "-80.2962",
        },
        areaServed: {
          "@type": "City",
          name: "Pembroke Pines",
        },
      },
      datePublished: "2025-01-08",
      description:
        "Expert guidance on personal injury claims in Pembroke Pines. Learn how to maximize your compensation with The Costello Law Group.",
    },
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0066B2] to-[#00A878] text-white">
        <div className="max-w-5xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Industry News
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-2 bg-white/20 text-white text-sm font-semibold rounded-full">{post.category}</span>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="h-4 w-4" />
              <span>{post.location}</span>
            </div>
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold mb-6 text-balance">{post.title}</h1>
          <div className="flex items-center gap-6 text-white/80 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {post.content.map((section, index) => (
            <div key={index} className="mb-16">
              {section.type === "intro" && (
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">{section.heading}</h2>
                    <p className="text-xl text-gray-700 leading-relaxed">{section.text}</p>
                  </div>
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                    <Image src={section.image || ""} alt={section.heading} fill className="object-cover" />
                  </div>
                </div>
              )}

              {section.type === "content" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                    {section.subheading && (
                      <h3 className="font-serif text-2xl font-semibold text-[#0066B2] mb-6">{section.subheading}</h3>
                    )}
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">{section.text}</p>
                  </div>

                  {section.image && (
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-8">
                      <Image
                        src={section.image || "/placeholder.svg"}
                        alt={section.heading}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {section.stats && (
                    <div className="grid grid-cols-3 gap-6 p-8 bg-gradient-to-br from-[#0066B2] to-[#00A878] rounded-xl text-white">
                      {section.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-4xl font-bold mb-2">{stat.value}</div>
                          <div className="text-sm opacity-90">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {section.type === "results" && (
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 lg:p-12">
                  <h2 className="font-serif text-4xl font-bold text-gray-900 mb-8 text-center">{section.heading}</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {section.cases?.map((caseItem, i) => (
                      <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                        <div className="text-3xl font-bold text-[#00A878] mb-3">{caseItem.amount}</div>
                        <p className="text-gray-700">{caseItem.description}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 text-center mt-6 italic">
                    *Past results do not guarantee future outcomes
                  </p>
                </div>
              )}

              {section.type === "cta" && (
                <div className="bg-gradient-to-br from-[#0066B2] to-[#00A878] rounded-2xl p-8 lg:p-12 text-white">
                  <h2 className="font-serif text-4xl font-bold mb-8">{section.heading}</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {section.steps?.map((step, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">
                          {i + 1}
                        </div>
                        <p className="text-lg">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(post.schema) }} />

      <Footer />
    </div>
  )
}
