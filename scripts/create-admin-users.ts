/**
 * One-time script to create admin users in Supabase
 * Run this with: npx tsx scripts/create-admin-users.ts
 */

import { config } from 'dotenv'
import { createClient } from '@supabase/supabase-js'

// Load environment variables from .env.local
config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

async function createAdminUsers() {
  console.log('Creating admin users...\n')

  // Create Josh Costello (Owner)
  console.log('Creating Josh Costello account...')
  const { data: josh, error: joshError } = await supabase.auth.admin.createUser({
    email: 'joshuacostello2013@gmail.com',
    password: 'CostelloLaw2024!',
    email_confirm: true,
    user_metadata: {
      name: 'Josh Costello',
      role: 'owner'
    }
  })

  if (joshError) {
    console.error('Error creating Josh:', joshError.message)
  } else {
    console.log('✅ Josh Costello created successfully!')
    console.log('   Email: joshuacostello2013@gmail.com')
    console.log('   Password: CostelloLaw2024!')
    console.log('   User ID:', josh.user.id)
  }

  console.log('')

  // Create Ryan Walker (Super Admin)
  console.log('Creating Ryan Walker account...')
  const { data: ryan, error: ryanError } = await supabase.auth.admin.createUser({
    email: 'rdub@fullstackwoo.day',
    password: 'FullStackWoo2024!',
    email_confirm: true,
    user_metadata: {
      name: 'Ryan Walker',
      role: 'super_admin'
    }
  })

  if (ryanError) {
    console.error('Error creating Ryan:', ryanError.message)
  } else {
    console.log('✅ Ryan Walker created successfully!')
    console.log('   Email: rdub@fullstackwoo.day')
    console.log('   Password: FullStackWoo2024!')
    console.log('   User ID:', ryan.user.id)
  }

  console.log('\n✅ Admin users created successfully!')
  console.log('\nYou can now log in at: https://the-poop-build.vercel.app/admin')
}

createAdminUsers()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Fatal error:', error)
    process.exit(1)
  })
