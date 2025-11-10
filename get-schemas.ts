import { config } from 'dotenv'
import { createClient } from '@supabase/supabase-js'

config({ path: '.env.local' })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function getSchemas() {
  const tables = ['pages', 'testimonials', 'practice_areas', 'case_results']
  
  for (const table of tables) {
    console.log(`\n=== ${table.toUpperCase()} ===`)
    const { data, error } = await supabase.from(table).select('*').limit(1)
    if (data && data.length > 0) {
      console.log('Columns:', Object.keys(data[0]))
    } else {
      // Try to get schema from empty table
      const { data: emptyData } = await supabase.from(table).select('*').limit(0)
      console.log('Table exists but is empty')
    }
  }
}

getSchemas()
