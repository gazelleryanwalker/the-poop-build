import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type SiteSettings = {
  id: string
  key: string
  value: any
  updated_at: string
}

export type Page = {
  id: string
  slug: string
  title: string
  content: any
  seo_title?: string
  seo_description?: string
  seo_keywords?: string[]
  og_image?: string
  published: boolean
  created_at: string
  updated_at: string
}

export type BlogPost = {
  id: string
  slug: string
  title: string
  excerpt?: string
  content: string
  featured_image?: string
  author?: string
  category?: string
  tags?: string[]
  seo_title?: string
  seo_description?: string
  seo_keywords?: string[]
  published: boolean
  published_at?: string
  created_at: string
  updated_at: string
}

export type Testimonial = {
  id: string
  client_name: string
  client_title?: string
  content: string
  rating: number
  image?: string
  case_type?: string
  published: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export type PracticeArea = {
  id: string
  title: string
  slug: string
  description?: string
  icon?: string
  content?: string
  featured_image?: string
  published: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export type CaseResult = {
  id: string
  title: string
  case_type?: string
  result_amount?: string
  description?: string
  published: boolean
  display_order: number
  created_at: string
  updated_at: string
}
