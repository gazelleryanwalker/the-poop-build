import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import yaml from 'yaml'

/**
 * Pages CMS Client - Fetches content directly from GitHub repository
 * Content is stored in YAML and Markdown files in the content/ directory
 */

const contentDir = path.join(process.cwd(), 'content')

/**
 * Parse a markdown/yaml file with front matter
 */
function parseContentFile(filePath: string) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const { data, content: body } = matter(content)
    return { data, body }
  } catch (error) {
    console.error(`Error parsing file ${filePath}:`, error)
    return null
  }
}

/**
 * Parse a JSON file
 */
function parseJsonFile(filePath: string) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(content)
  } catch (error) {
    console.error(`Error parsing JSON file ${filePath}:`, error)
    return null
  }
}

/**
 * Get all files in a directory
 */
function getFilesInDirectory(dir: string, ext?: string): string[] {
  try {
    if (!fs.existsSync(dir)) {
      return []
    }
    const files = fs.readdirSync(dir)
    return files
      .filter(f => !ext || f.endsWith(ext))
      .map(f => path.join(dir, f))
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error)
    return []
  }
}

/**
 * Fetch all blog posts
 */
export async function getAllPosts() {
  try {
    const postsDir = path.join(contentDir, 'posts')
    const files = getFilesInDirectory(postsDir, '.md')

    const posts = files
      .map(file => {
        const parsed = parseContentFile(file)
        if (!parsed) return null
        return {
          ...(parsed.data || {}),
          body: parsed.body,
          slug: path.basename(file, '.md'),
        }
      })
      .filter(post => post !== null)
      .sort((a, b) => {
        const dateA = new Date((a as any).date || 0).getTime()
        const dateB = new Date((b as any).date || 0).getTime()
        return dateB - dateA
      })

    return posts as any[]
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

/**
 * Fetch a single blog post by slug
 */
export async function getPostBySlug(slug: string) {
  try {
    const filePath = path.join(contentDir, 'posts', `${slug}.md`)
    const parsed = parseContentFile(filePath)
    if (!parsed) return null

    return {
      ...(parsed.data || {}),
      body: parsed.body,
      slug,
    } as any
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error)
    return null
  }
}

/**
 * Fetch a single page by slug
 */
export async function getPageBySlug(slug: string) {
  try {
    const filePath = path.join(contentDir, 'pages', `${slug}.md`)
    const parsed = parseContentFile(filePath)
    if (!parsed) return null

    return {
      ...parsed.data,
      content: parsed.body,
      slug,
    }
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error)
    return null
  }
}

/**
 * Fetch all testimonials
 */
export async function getAllTestimonials() {
  try {
    const testimonialsDir = path.join(contentDir, 'testimonials')
    const files = getFilesInDirectory(testimonialsDir, '.json')

    const testimonials = files
      .map(file => parseJsonFile(file))
      .filter((t): t is object => t !== null)

    return testimonials as Array<{
      client_name: string
      case_type: string
      quote: string
      rating: number
      featured?: boolean
      date?: string
    }>
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

/**
 * Fetch all case results
 */
export async function getAllCaseResults() {
  try {
    const caseResultsDir = path.join(contentDir, 'case-results')
    const files = getFilesInDirectory(caseResultsDir, '.json')

    const caseResults = files
      .map(file => parseJsonFile(file))
      .filter((c): c is object => c !== null)

    return caseResults as Array<{
      title: string
      case_type: string
      settlement_amount: string
      description?: string
      featured?: boolean
    }>
  } catch (error) {
    console.error('Error fetching case results:', error)
    return []
  }
}

/**
 * Fetch all practice areas
 */
export async function getAllPracticeAreas() {
  try {
    const practiceAreasDir = path.join(contentDir, 'practice-areas')
    const files = getFilesInDirectory(practiceAreasDir, '.md')

    const practiceAreas = files
      .map(file => {
        const parsed = parseContentFile(file)
        if (!parsed) return null
        return {
          ...(parsed?.data || {}),
          content: parsed.body,
          slug: path.basename(file, '.md'),
        }
      })
      .filter(pa => pa !== null)
      .sort((a, b) => ((a as any).order || 0) - ((b as any).order || 0))

    return practiceAreas as any[]
  } catch (error) {
    console.error('Error fetching practice areas:', error)
    return []
  }
}

/**
 * Fetch site settings
 */
export async function getSiteSettings() {
  try {
    const settingsFile = path.join(contentDir, 'settings', 'site.json')
    const settings = parseJsonFile(settingsFile)
    return settings
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}

/**
 * Fetch all FAQ items
 */
export async function getAllFAQ() {
  try {
    const faqDir = path.join(contentDir, 'faq')
    const files = getFilesInDirectory(faqDir, '.json')

    const faqs = files
      .map(file => parseJsonFile(file))
      .filter((f): f is object => f !== null)
      .sort((a, b) => ((a as any).order || 0) - ((b as any).order || 0))

    return faqs as Array<{
      question: string
      answer: string
      category?: string
      order?: number
    }>
  } catch (error) {
    console.error('Error fetching FAQ:', error)
    return []
  }
}

/**
 * Fetch all team members, sorted by display_order
 */
export async function getAllTeamMembers() {
  try {
    const teamDir = path.join(contentDir, 'team')
    const files = getFilesInDirectory(teamDir, '.json')

    const team = files
      .map(file => parseJsonFile(file))
      .filter((t): t is object => t !== null)
      .sort((a, b) => {
        const orderA = ((a as any).display_order ?? (a as any).order ?? 999)
        const orderB = ((b as any).display_order ?? (b as any).order ?? 999)
        return orderA - orderB
      })

    return team as Array<{
      name: string
      title: string
      slug?: string
      bio?: string
      photo?: string
      credentials?: string[]
      bar_status?: string
      education?: Array<{ school: string; degree: string; year: number }>
      experience_years?: number
      specialties?: string[]
      social_links?: Record<string, string>
      featured?: boolean
      display_order?: number
    }>
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}
