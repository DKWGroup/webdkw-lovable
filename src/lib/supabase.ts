import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://demo-project.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'demo-anon-key-placeholder'

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  published: boolean | null
  created_at: string | null
  updated_at: string | null
  author: string | null
  image_url?: string | null
  tags?: string[] | null
  meta_description?: string | null
  categories?: string[] | null
  tldr_summary?: string | null
  tldr_takeaways?: string[] | null
  faqs?: any
  ctas?: any
  seo_score?: number | null
  sources?: string[] | null
  download_materials?: any
}

export interface DownloadMaterial {
  id: string
  title: string
  description: string
  file_url: string
  file_size?: string
  file_type?: string
  button_color?: string
  button_size?: string
  download_count?: number
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  company?: string | null
  phone?: string | null
  message: string
  lead_magnet?: boolean | null
  created_at: string | null
}

export interface Project {
  id: string
  title: string
  slug: string
  category: string
  industry: string
  description: string
  image_url: string
  technologies: string[] | null
  results: any
  completion_date: string | null
  project_url?: string | null
  featured: boolean | null
  created_at: string | null
  updated_at: string | null
  case_study?: boolean | null
  case_study_header?: string | null
  case_study_introduction?: string | null
  case_study_goals?: string | null
  case_study_implementation?: string | null
  case_study_results?: string | null
  case_study_summary?: string | null
  case_study_cta?: string | null
}
