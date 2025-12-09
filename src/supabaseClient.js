import { createClient } from '@supabase/supabase-js'

// REPLACE THESE WITH YOUR KEYS FROM STEP 3
const supabaseUrl = 'https://zmgufnqgtpsjvijutuss.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptZ3VmbnFndHBzanZpanV0dXNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMjM2NjIsImV4cCI6MjA3OTM4MzY2Mn0.nJRsHXqRVK2UTXC_gpzi21BOkk02VY2I4NnKVQuyruk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)