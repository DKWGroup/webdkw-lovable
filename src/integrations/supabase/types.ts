export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author: string | null
          categories: string[] | null
          content: string
          created_at: string | null
          ctas: Json | null
          download_materials: Json | null
          excerpt: string | null
          faqs: Json | null
          id: string
          image_url: string | null
          meta_description: string | null
          published: boolean | null
          seo_score: number | null
          slug: string
          sources: string[] | null
          tags: string[] | null
          title: string
          tldr_summary: string | null
          tldr_takeaways: string[] | null
          updated_at: string | null
        }
        Insert: {
          author?: string | null
          categories?: string[] | null
          content: string
          created_at?: string | null
          ctas?: Json | null
          download_materials?: Json | null
          excerpt?: string | null
          faqs?: Json | null
          id?: string
          image_url?: string | null
          meta_description?: string | null
          published?: boolean | null
          seo_score?: number | null
          slug: string
          sources?: string[] | null
          tags?: string[] | null
          title: string
          tldr_summary?: string | null
          tldr_takeaways?: string[] | null
          updated_at?: string | null
        }
        Update: {
          author?: string | null
          categories?: string[] | null
          content?: string
          created_at?: string | null
          ctas?: Json | null
          download_materials?: Json | null
          excerpt?: string | null
          faqs?: Json | null
          id?: string
          image_url?: string | null
          meta_description?: string | null
          published?: boolean | null
          seo_score?: number | null
          slug?: string
          sources?: string[] | null
          tags?: string[] | null
          title?: string
          tldr_summary?: string | null
          tldr_takeaways?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          company: string | null
          created_at: string | null
          email: string
          id: string
          lead_magnet: boolean | null
          message: string
          name: string
          phone: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string | null
          email: string
          id?: string
          lead_magnet?: boolean | null
          message: string
          name: string
          phone?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string | null
          email?: string
          id?: string
          lead_magnet?: boolean | null
          message?: string
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          case_study: boolean | null
          case_study_cta: string | null
          case_study_goals: string | null
          case_study_header: string | null
          case_study_implementation: string | null
          case_study_introduction: string | null
          case_study_results: string | null
          case_study_summary: string | null
          category: string
          completion_date: string | null
          created_at: string | null
          description: string
          featured: boolean | null
          id: string
          image_url: string
          industry: string
          project_url: string | null
          results: Json | null
          slug: string
          technologies: string[] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          case_study?: boolean | null
          case_study_cta?: string | null
          case_study_goals?: string | null
          case_study_header?: string | null
          case_study_implementation?: string | null
          case_study_introduction?: string | null
          case_study_results?: string | null
          case_study_summary?: string | null
          category: string
          completion_date?: string | null
          created_at?: string | null
          description: string
          featured?: boolean | null
          id?: string
          image_url: string
          industry: string
          project_url?: string | null
          results?: Json | null
          slug: string
          technologies?: string[] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          case_study?: boolean | null
          case_study_cta?: string | null
          case_study_goals?: string | null
          case_study_header?: string | null
          case_study_implementation?: string | null
          case_study_introduction?: string | null
          case_study_results?: string | null
          case_study_summary?: string | null
          category?: string
          completion_date?: string | null
          created_at?: string | null
          description?: string
          featured?: boolean | null
          id?: string
          image_url?: string
          industry?: string
          project_url?: string | null
          results?: Json | null
          slug?: string
          technologies?: string[] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      security_logs: {
        Row: {
          details: Json | null
          email: string | null
          event_type: string
          id: string
          ip_address: string
          timestamp: string
          user_agent: string | null
        }
        Insert: {
          details?: Json | null
          email?: string | null
          event_type: string
          id?: string
          ip_address: string
          timestamp?: string
          user_agent?: string | null
        }
        Update: {
          details?: Json | null
          email?: string | null
          event_type?: string
          id?: string
          ip_address?: string
          timestamp?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_contact_submission_count: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      has_role: {
        Args: { _role: Database["public"]["Enums"]["app_role"] }
        Returns: boolean
      }
      is_admin: {
        Args: { check_user_id?: string }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
