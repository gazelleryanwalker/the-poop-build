import { config } from 'dotenv'
import { createClient } from '@supabase/supabase-js'

config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function inspectTables() {
  const tables = ['blog_posts', 'site_settings', 'pages', 'practice_areas', 'case_results', 'testimonials']
  
  for (const table of tables) {
    console.log(`\n=== ${table.toUpperCase()} ===`)
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .limit(1)
    
    if (error) {
      console.error(`Error: ${error.message}`)
    } else {
      if (data && data.length > 0) {
        console.log('Columns:', Object.keys(data[0]).join(', '))
      } else {
        // Table is empty, try to get schema another way
        const { data: schemaData } = await supabase
          .from(table)
          .select('*')
          .limit(0)
        console.log('Table is empty')
      }
    }
  }
}

inspectTables()
