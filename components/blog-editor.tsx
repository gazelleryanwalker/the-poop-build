'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { supabase } from '@/lib/supabase'
import { Save, Eye, Upload, X } from 'lucide-react'

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

interface BlogPost {
  id?: string
  slug: string
  title: string
  excerpt: string
  content: string
  featured_image?: string
  author: string
  category: string
  tags: string[]
  seo_title: string
  seo_description: string
  seo_keywords: string[]
  published: boolean
  published_at?: string
}

export default function BlogEditor({ postId }: { postId?: string }) {
  const [post, setPost] = useState<BlogPost>({
    slug: '',
    title: '',
    excerpt: '',
    content: '',
    featured_image: '',
    author: '',
    category: '',
    tags: [],
    seo_title: '',
    seo_description: '',
    seo_keywords: [],
    published: false,
  })
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [tagInput, setTagInput] = useState('')
  const [keywordInput, setKeywordInput] = useState('')

  // Using the singleton supabase client

  useEffect(() => {
    if (postId) {
      loadPost()
    }
  }, [postId])

  async function loadPost() {
    setLoading(true)
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', postId)
      .single()

    if (data) {
      setPost(data)
    }
    setLoading(false)
  }

  async function handleSave(publish: boolean = false) {
    setSaving(true)
    setMessage('')

    const postData = {
      ...post,
      published: publish,
      published_at: publish ? new Date().toISOString() : post.published_at,
      updated_at: new Date().toISOString(),
    }

    try {
      if (postId) {
        // Update existing post
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', postId)

        if (error) throw error
        setMessage('Post updated successfully!')
      } else {
        // Create new post
        const { error } = await supabase
          .from('blog_posts')
          .insert([postData])

        if (error) throw error
        setMessage('Post created successfully!')
      }
    } catch (error: any) {
      setMessage(`Error: ${error.message}`)
    }

    setSaving(false)
  }

  function addTag() {
    if (tagInput && !post.tags.includes(tagInput)) {
      setPost({ ...post, tags: [...post.tags, tagInput] })
      setTagInput('')
    }
  }

  function removeTag(tag: string) {
    setPost({ ...post, tags: post.tags.filter(t => t !== tag) })
  }

  function addKeyword() {
    if (keywordInput && !post.seo_keywords.includes(keywordInput)) {
      setPost({ ...post, seo_keywords: [...post.seo_keywords, keywordInput] })
      setKeywordInput('')
    }
  }

  function removeKeyword(keyword: string) {
    setPost({ ...post, seo_keywords: post.seo_keywords.filter(k => k !== keyword) })
  }

  // Auto-generate slug from title
  function generateSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          {postId ? 'Edit Blog Post' : 'New Blog Post'}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => handleSave(false)}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            Save Draft
          </button>
          <button
            onClick={() => handleSave(true)}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 bg-[#00A878] text-white rounded-lg hover:bg-[#008f67] disabled:opacity-50"
          >
            <Eye className="w-4 h-4" />
            Publish
          </button>
        </div>
      </div>

      {message && (
        <div className={`p-4 rounded-lg ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}

      {/* Basic Info */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={post.title}
            onChange={(e) => {
              setPost({ ...post, title: e.target.value, slug: generateSlug(e.target.value) })
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="Enter post title..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Slug (URL)</label>
          <input
            type="text"
            value={post.slug}
            onChange={(e) => setPost({ ...post, slug: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="post-url-slug"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
          <textarea
            value={post.excerpt}
            onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="Brief summary of the post..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
            <input
              type="text"
              value={post.author}
              onChange={(e) => setPost({ ...post, author: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
              placeholder="Author name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <input
              type="text"
              value={post.category}
              onChange={(e) => setPost({ ...post, category: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
              placeholder="Category"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
              placeholder="Add a tag..."
            />
            <button
              onClick={addTag}
              className="px-4 py-2 bg-[#00A878] text-white rounded-lg hover:bg-[#008f67]"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tag}
                <button onClick={() => removeTag(tag)} className="hover:text-red-600">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image URL</label>
          <input
            type="text"
            value={post.featured_image}
            onChange={(e) => setPost({ ...post, featured_image: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="https://example.com/image.jpg"
          />
          {post.featured_image && (
            <img src={post.featured_image} alt="Preview" className="mt-2 max-h-48 rounded-lg" />
          )}
        </div>
      </div>

      {/* Content Editor */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Content</h3>
        <div className="prose-editor">
          <ReactQuill
            theme="snow"
            value={post.content}
            onChange={(content) => setPost({ ...post, content })}
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ align: [] }],
                ['link', 'image'],
                ['clean'],
              ],
            }}
            className="min-h-[400px]"
          />
        </div>
      </div>

      {/* SEO Settings */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">SEO Settings</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SEO Title</label>
          <input
            type="text"
            value={post.seo_title}
            onChange={(e) => setPost({ ...post, seo_title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="SEO optimized title (60 chars max)"
            maxLength={60}
          />
          <p className="text-xs text-gray-500 mt-1">{post.seo_title.length}/60 characters</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SEO Description</label>
          <textarea
            value={post.seo_description}
            onChange={(e) => setPost({ ...post, seo_description: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="SEO meta description (160 chars max)"
            maxLength={160}
          />
          <p className="text-xs text-gray-500 mt-1">{post.seo_description.length}/160 characters</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SEO Keywords</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={keywordInput}
              onChange={(e) => setKeywordInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
              placeholder="Add a keyword..."
            />
            <button
              onClick={addKeyword}
              className="px-4 py-2 bg-[#00A878] text-white rounded-lg hover:bg-[#008f67]"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.seo_keywords.map((keyword) => (
              <span
                key={keyword}
                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
              >
                {keyword}
                <button onClick={() => removeKeyword(keyword)} className="hover:text-red-600">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
