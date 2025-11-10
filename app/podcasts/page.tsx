import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, Mic } from "lucide-react"
import Image from "next/image"

export default function PodcastsPage() {
  // Placeholder data - user will add actual podcasts through TinaCMS
  const podcasts: any[] = [];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Mic className="h-12 w-12" />
            <h1 className="font-serif text-5xl lg:text-6xl font-bold">Podcasts</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Listen to expert legal insights and discussions from The Costello Law Group
          </p>
        </div>
      </section>

      {/* Podcasts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {podcasts.length === 0 ? (
            <div className="text-center py-20">
              <Mic className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Coming Soon
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're preparing exciting podcast episodes for you. Check back soon to hear expert legal insights,
                client stories, and discussions on personal injury law.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {podcasts.map((podcast: any) => (
                <Card
                  key={podcast._id}
                  className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50"
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={podcast.coverImage || "/placeholder.svg?height=400&width=400"}
                        alt={podcast.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-accent text-white text-sm font-semibold rounded-full">
                          Episode {podcast.episodeNumber}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(podcast.publishedAt).toLocaleDateString()}
                        </div>
                        {podcast.duration && (
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {podcast.duration} min
                          </div>
                        )}
                      </div>

                      <h2 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {podcast.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                        {podcast.description}
                      </p>

                      <Link
                        href={`/podcasts/${podcast.slug}`}
                        className="inline-flex items-center text-primary font-semibold group-hover:text-accent group-hover:gap-2 transition-all"
                      >
                        Listen Now <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
