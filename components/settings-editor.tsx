'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Save, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'

interface SiteSettings {
  social_media?: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
    youtube?: string
  }
  contact?: {
    email?: string
    phone?: string
    address?: string
  }
  theme?: {
    primary_color?: string
    secondary_color?: string
  }
  company?: {
    name?: string
    tagline?: string
    description?: string
  }
}

export default function SettingsEditor() {
  const [settings, setSettings] = useState<SiteSettings>({
    social_media: {},
    contact: {},
    theme: {
      primary_color: '#00A878',
      secondary_color: '#0A1628',
    },
    company: {},
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  const supabase = createClient()

  useEffect(() => {
    loadSettings()
  }, [])

  async function loadSettings() {
    setLoading(true)
    const { data, error } = await supabase
      .from('site_settings')
      .select('*')

    if (data && data.length > 0) {
      const settingsObj: SiteSettings = {}
      data.forEach((item) => {
        settingsObj[item.key as keyof SiteSettings] = item.value
      })
      setSettings(settingsObj)
    }
    setLoading(false)
  }

  async function handleSave() {
    setSaving(true)
    setMessage('')

    try {
      // Delete existing settings
      await supabase.from('site_settings').delete().neq('id', '00000000-0000-0000-0000-000000000000')

      // Insert new settings
      const settingsArray = Object.entries(settings).map(([key, value]) => ({
        key,
        value,
        updated_at: new Date().toISOString(),
      }))

      const { error } = await supabase
        .from('site_settings')
        .insert(settingsArray)

      if (error) throw error
      setMessage('Settings saved successfully!')
    } catch (error: any) {
      setMessage(`Error: ${error.message}`)
    }

    setSaving(false)
  }

  function updateSocialMedia(platform: string, value: string) {
    setSettings({
      ...settings,
      social_media: {
        ...settings.social_media,
        [platform]: value,
      },
    })
  }

  function updateContact(field: string, value: string) {
    setSettings({
      ...settings,
      contact: {
        ...settings.contact,
        [field]: value,
      },
    })
  }

  function updateTheme(field: string, value: string) {
    setSettings({
      ...settings,
      theme: {
        ...settings.theme,
        [field]: value,
      },
    })
  }

  function updateCompany(field: string, value: string) {
    setSettings({
      ...settings,
      company: {
        ...settings.company,
        [field]: value,
      },
    })
  }

  if (loading) {
    return <div className="p-8 text-center">Loading settings...</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Site Settings</h2>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-4 py-2 bg-[#00A878] text-white rounded-lg hover:bg-[#008f67] disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
      </div>

      {message && (
        <div className={`p-4 rounded-lg ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}

      {/* Company Information */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Company Information</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
          <input
            type="text"
            value={settings.company?.name || ''}
            onChange={(e) => updateCompany('name', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="The Costello Law Group"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
          <input
            type="text"
            value={settings.company?.tagline || ''}
            onChange={(e) => updateCompany('tagline', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="Your Trusted Legal Partner"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            value={settings.company?.description || ''}
            onChange={(e) => updateCompany('description', e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="Brief description of your law firm..."
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className="w-4 h-4 inline mr-2" />
            Email Address
          </label>
          <input
            type="email"
            value={settings.contact?.email || ''}
            onChange={(e) => updateContact('email', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="contact@costellolawgroup.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className="w-4 h-4 inline mr-2" />
            Phone Number
          </label>
          <input
            type="tel"
            value={settings.contact?.phone || ''}
            onChange={(e) => updateContact('phone', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="w-4 h-4 inline mr-2" />
            Address
          </label>
          <textarea
            value={settings.contact?.address || ''}
            onChange={(e) => updateContact('address', e.target.value)}
            rows={2}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="123 Main St, City, State 12345"
          />
        </div>
      </div>

      {/* Social Media Links */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Social Media Links</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Facebook className="w-4 h-4 inline mr-2" />
            Facebook
          </label>
          <input
            type="url"
            value={settings.social_media?.facebook || ''}
            onChange={(e) => updateSocialMedia('facebook', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="https://facebook.com/yourpage"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Twitter className="w-4 h-4 inline mr-2" />
            Twitter / X
          </label>
          <input
            type="url"
            value={settings.social_media?.twitter || ''}
            onChange={(e) => updateSocialMedia('twitter', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="https://twitter.com/yourhandle"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Instagram className="w-4 h-4 inline mr-2" />
            Instagram
          </label>
          <input
            type="url"
            value={settings.social_media?.instagram || ''}
            onChange={(e) => updateSocialMedia('instagram', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="https://instagram.com/yourprofile"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Linkedin className="w-4 h-4 inline mr-2" />
            LinkedIn
          </label>
          <input
            type="url"
            value={settings.social_media?.linkedin || ''}
            onChange={(e) => updateSocialMedia('linkedin', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="https://linkedin.com/company/yourcompany"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Youtube className="w-4 h-4 inline mr-2" />
            YouTube
          </label>
          <input
            type="url"
            value={settings.social_media?.youtube || ''}
            onChange={(e) => updateSocialMedia('youtube', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
            placeholder="https://youtube.com/@yourchannel"
          />
        </div>
      </div>

      {/* Theme Colors */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Theme Colors</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color (Teal)</label>
            <div className="flex gap-2">
              <input
                type="color"
                value={settings.theme?.primary_color || '#00A878'}
                onChange={(e) => updateTheme('primary_color', e.target.value)}
                className="h-10 w-20 rounded border border-gray-300"
              />
              <input
                type="text"
                value={settings.theme?.primary_color || '#00A878'}
                onChange={(e) => updateTheme('primary_color', e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
                placeholder="#00A878"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Color (Navy)</label>
            <div className="flex gap-2">
              <input
                type="color"
                value={settings.theme?.secondary_color || '#0A1628'}
                onChange={(e) => updateTheme('secondary_color', e.target.value)}
                className="h-10 w-20 rounded border border-gray-300"
              />
              <input
                type="text"
                value={settings.theme?.secondary_color || '#0A1628'}
                onChange={(e) => updateTheme('secondary_color', e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A878] focus:border-transparent"
                placeholder="#0A1628"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
