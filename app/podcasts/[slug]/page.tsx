import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Mic, Play, User, Users } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"

// This will be populated by TinaCMS when podcasts are added
const podcasts: Record<string, any> = {};

export async function generateStaticParams() {
  return Object.keys(podcasts).map((slug) => ({
    slug,
  }))
}

export default function PodcastEpisodePage({ params }: { params: { slug: string } }) {
  const podcast = podcasts[params.slug]

  if (!podcast) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0066B2] to-[#00A878] text-white">
        <div className="max-w-5xl mx-auto">
          <Link href="/podcasts" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Podcasts
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-2 bg-white/20 text-white text-sm font-semibold rounded-full">
              Episode {podcast.episodeNumber}
            </span>
            <div className="flex items-center gap-2 text-white/80">
              <Mic className="h-4 w-4" />
              <span>Podcast</span>
            </div>
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold mb-6 text-balance">{podcast.title}</h1>
          <div className="flex items-center gap-6 text-white/80 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{new Date(podcast.publishedAt).toLocaleDateString()}</span>
            </div>
            {podcast.duration && (
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{podcast.duration} min</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src={podcast.coverImage || "/placeholder.svg"} 
              alt={podcast.title} 
              fill 
              className="object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Audio Player & Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Audio Player */}
          {podcast.audioUrl && (
            <div className="mb-12 bg-gradient-to-br from-[#0066B2] to-[#00A878] rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Play className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Listen Now</h3>
                  <p className="text-white/80">Stream this episode</p>
                </div>
              </div>
              <audio controls className="w-full">
                <source src={podcast.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}

          {/* Episode Info */}
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">About This Episode</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">{podcast.description}</p>

            <div className="grid md:grid-cols-2 gap-8">
              {podcast.hosts && podcast.hosts.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <User className="h-5 w-5 text-[#0066B2]" />
                    <h3 className="font-semibold text-lg">
                      {podcast.hosts.length === 1 ? 'Host' : 'Hosts'}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {podcast.hosts.map((host: string, index: number) => (
                      <li key={index} className="text-gray-700">{host}</li>
                    ))}
                  </ul>
                </div>
              )}

              {podcast.guests && podcast.guests.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="h-5 w-5 text-[#0066B2]" />
                    <h3 className="font-semibold text-lg">
                      {podcast.guests.length === 1 ? 'Guest' : 'Guests'}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {podcast.guests.map((guest: string, index: number) => (
                      <li key={index} className="text-gray-700">{guest}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {podcast.tags && podcast.tags.length > 0 && (
              <div className="mt-8">
                <div className="flex flex-wrap gap-2">
                  {podcast.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Show Notes */}
          {podcast.body && (
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Show Notes</h2>
              <div dangerouslySetInnerHTML={{ __html: podcast.body }} />
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
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
