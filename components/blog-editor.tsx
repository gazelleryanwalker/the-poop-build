'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Save, Eye, Upload, X, ArrowLeft } from 'lucide-react'

interface BlogPost {
  id?: string
  slug: string
  title: string
  excerpt: string
  content: string
  featured_image?: string
  author?: string
  category?: string
  tags?: string[]
  seo_title?: string
  seo_description?: string
  seo_keywords?: string[]
  published?: boolean
  published_at?: string
  created_at?: string
  updated_at?: string
}

export default function BlogEditor({ postId, onBack }: { postId?: string; onBack: () => void }) {
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
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', postId)
        
        if (error) throw error
        setMessage('Post updated successfully!')
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert([{ ...postData, created_at: new Date().toISOString() }])
        
        if (error) throw error
        setMessage(publish ? 'Post published successfully!' : 'Draft saved successfully!')
      }
    } catch (error: any) {
      setMessage(`Error: ${error.message}`)
    }

    setSaving(false)
  }

  function generateSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  function handleTitleChange(title: string) {
    setPost({ ...post, title, slug: generateSlug(title) })
  }

  function addTag() {
    if (tagInput && !post.tags?.includes(tagInput)) {
      setPost({ ...post, tags: [...(post.tags || []), tagInput] })
      setTagInput('')
    }
  }

  function removeTag(tag: string) {
    setPost({ ...post, tags: post.tags?.filter(t => t !== tag) })
  }

  function addKeyword() {
    if (keywordInput && !post.seo_keywords?.includes(keywordInput)) {
      setPost({ ...post, seo_keywords: [...(post.seo_keywords || []), keywordInput] })
      setKeywordInput('')
    }
  }

  function removeKeyword(keyword: string) {
    setPost({ ...post, seo_keywords: post.seo_keywords?.filter(k => k !== keyword) })
  }

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Posts
          </button>
          <h2 className="text-2xl font-bold text-gray-900">
            {postId ? 'Edit Blog Post' : 'New Blog Post'}
          </h2>
        </div>
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
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h3 className="text-lg font-semibold">Basic Information</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={post.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="Enter post title..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
          <input
            type="text"
            value={post.slug}
            onChange={(e) => setPost({ ...post, slug: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="post-url-slug"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
          <textarea
            value={post.excerpt}
            onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="Brief description..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
          <textarea
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            rows={15}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent font-mono text-sm"
            placeholder="Write your blog post content here... (Markdown supported)"
          />
          <p className="text-sm text-gray-500 mt-1">You can use Markdown formatting</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
            <input
              type="text"
              value={post.author || ''}
              onChange={(e) => setPost({ ...post, author: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
              placeholder="Author name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <input
              type="text"
              value={post.category || ''}
              onChange={(e) => setPost({ ...post, category: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
              placeholder="Category"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Featured Image URL</label>
          <input
            type="text"
            value={post.featured_image || ''}
            onChange={(e) => setPost({ ...post, featured_image: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
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
            {post.tags?.map((tag) => (
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
      </div>

      {/* SEO */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h3 className="text-lg font-semibold">SEO Settings</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">SEO Title</label>
          <input
            type="text"
            value={post.seo_title || ''}
            onChange={(e) => setPost({ ...post, seo_title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="SEO title (defaults to post title)"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">SEO Description</label>
          <textarea
            value={post.seo_description || ''}
            onChange={(e) => setPost({ ...post, seo_description: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="Meta description for search engines..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">SEO Keywords</label>
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
            {post.seo_keywords?.map((keyword) => (
              <span
                key={keyword}
                className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
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
