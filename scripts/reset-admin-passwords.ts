/**
 * Script to reset passwords for existing admin users
 * Run this with: npx tsx scripts/reset-admin-passwords.ts
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

async function resetPasswords() {
  console.log('Resetting admin passwords...\n')

  // Get Josh's user ID
  const { data: joshUser } = await supabase.auth.admin.listUsers()
  const josh = joshUser?.users.find(u => u.email === 'joshuacostello2013@gmail.com')
  
  if (josh) {
    console.log('Resetting password for Josh Costello...')
    const { error: joshError } = await supabase.auth.admin.updateUserById(
      josh.id,
      { password: 'CostelloLaw2024!' }
    )
    
    if (joshError) {
      console.error('Error resetting Josh password:', joshError.message)
    } else {
      console.log('✅ Josh password reset successfully!')
      console.log('   Email: joshuacostello2013@gmail.com')
      console.log('   Password: CostelloLaw2024!')
    }
  }

  console.log('')

  // Get Ryan's user ID
  const ryan = joshUser?.users.find(u => u.email === 'rdub@fullstackwoo.day')
  
  if (ryan) {
    console.log('Resetting password for Ryan Walker...')
    const { error: ryanError } = await supabase.auth.admin.updateUserById(
      ryan.id,
      { password: 'FullStackWoo2024!' }
    )
    
    if (ryanError) {
      console.error('Error resetting Ryan password:', ryanError.message)
    } else {
      console.log('✅ Ryan password reset successfully!')
      console.log('   Email: rdub@fullstackwoo.day')
      console.log('   Password: FullStackWoo2024!')
    }
  }

  console.log('\n✅ Passwords reset successfully!')
  console.log('\nYou can now log in at: https://the-poop-build.vercel.app/admin')
}

resetPasswords()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Fatal error:', error)
    process.exit(1)
  })
