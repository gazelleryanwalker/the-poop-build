import HomePageClient from "./page-client"

export const revalidate = 60 // Revalidate every 60 seconds

export default async function HomePage() {
  // Use static data - Pages CMS will manage content files
  const testimonials: any[] = []
  const practiceAreas: any[] = []
  const homePageData = null

  return <HomePageClient testimonials={testimonials} practiceAreas={practiceAreas} homePageData={homePageData} />
}
