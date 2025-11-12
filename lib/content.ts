import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDirectory = path.join(process.cwd(), 'content/posts')
const testimonialsDirectory = path.join(process.cwd(), 'content/testimonials')
const practiceAreasDirectory = path.join(process.cwd(), 'content/practice-areas')
const pagesDirectory = path.join(process.cwd(), 'content/pages')

export interface Post {
  slug: string
  title: string
  excerpt?: string
  body?: string
  featured_image?: string
  category?: string
  published_at?: string
  publishedAt?: string
  author?: string
  tags?: string[]
  readTime?: number
  seo?: {
    title?: string
    description?: string
  }
  _id?: string
  id?: string
  _sys?: {
    filename?: string
  }
}

export interface Testimonial {
  slug: string
  client_name: string
  case_type?: string
  quote: string
  rating?: number
  featured?: boolean
  date?: string
}

export interface PracticeArea {
  slug: string
  title: string
  description?: string
  body?: string
  icon?: string
  order?: number
  featured?: boolean
}

export interface Page {
  slug: string
  title: string
  body?: string
  hero_heading?: string
  hero_subheading?: string
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    // Check if content/posts directory exists
    if (!fs.existsSync(postsDirectory)) {
      console.log('Posts directory does not exist, returning empty array')
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const posts = fileNames
      .filter(fileName => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.(mdx|md)$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title || slug,
          excerpt: data.excerpt || data.description || '',
          body: marked(content),
          featured_image: data.featured_image || data.image || '/placeholder.jpg',
          category: data.category || 'Legal News',
          published_at: data.published_at || data.date || new Date().toISOString(),
          publishedAt: data.publishedAt || data.date || new Date().toISOString(),
          author: data.author || 'Joshua Costello, Esq.',
          tags: data.tags || [],
          readTime: data.readTime || Math.ceil(content.split(/\s+/).length / 200),
          seo: data.seo || {},
          _id: slug,
          id: slug,
          _sys: {
            filename: fileName
          }
        }
      })
      .sort((a, b) => {
        const dateA = new Date(a.published_at || 0).getTime()
        const dateB = new Date(b.published_at || 0).getTime()
        return dateB - dateA
      })

    return posts
  } catch (error) {
    console.error('Error reading posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const posts = await getAllPosts()
    return posts.find(post => post.slug === slug) || null
  } catch (error) {
    console.error('Error getting post by slug:', error)
    return null
  }
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  try {
    if (!fs.existsSync(testimonialsDirectory)) {
      console.log('Testimonials directory does not exist, returning empty array')
      return []
    }

    const fileNames = fs.readdirSync(testimonialsDirectory)
    const testimonials = fileNames
      .filter(fileName => fileName.endsWith('.json'))
      .map(fileName => {
        const slug = fileName.replace(/\.json$/, '')
        const fullPath = path.join(testimonialsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const data = JSON.parse(fileContents)

        return {
          slug,
          client_name: data.client_name || data.clientName || '',
          case_type: data.case_type || data.caseType || '',
          quote: data.quote || '',
          rating: data.rating || 5,
          featured: data.featured || false,
          date: data.date || new Date().toISOString()
        }
      })

    return testimonials
  } catch (error) {
    console.error('Error reading testimonials:', error)
    return []
  }
}

export async function getAllPracticeAreas(): Promise<PracticeArea[]> {
  try {
    if (!fs.existsSync(practiceAreasDirectory)) {
      console.log('Practice areas directory does not exist, returning empty array')
      return []
    }

    const fileNames = fs.readdirSync(practiceAreasDirectory)
    const practiceAreas = fileNames
      .filter(fileName => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.(mdx|md)$/, '')
        const fullPath = path.join(practiceAreasDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title || slug,
          description: data.description || '',
          body: marked(content),
          icon: data.icon || '',
          order: data.order || 0,
          featured: data.featured || false
        }
      })
      .sort((a, b) => (a.order || 0) - (b.order || 0))

    return practiceAreas
  } catch (error) {
    console.error('Error reading practice areas:', error)
    return []
  }
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    if (!fs.existsSync(pagesDirectory)) {
      console.log('Pages directory does not exist')
      return null
    }

    const fileNames = fs.readdirSync(pagesDirectory)
    const fileName = fileNames.find(name => 
      name.replace(/\.(mdx|md)$/, '') === slug
    )

    if (!fileName) {
      return null
    }

    const fullPath = path.join(pagesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      body: marked(content),
      hero_heading: data.hero_heading || data.heroHeading || '',
      hero_subheading: data.hero_subheading || data.heroSubheading || ''
    }
  } catch (error) {
    console.error('Error reading page:', error)
    return null
  }
}
