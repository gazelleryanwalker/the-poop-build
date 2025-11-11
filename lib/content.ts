import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface Post {
  slug: string
  title: string
  excerpt?: string
  body?: any
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
        const slug = fileName.replace(/\.(mdx?|md)$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title || slug,
          excerpt: data.excerpt || data.description || '',
          body: content,
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
