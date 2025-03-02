// lib/supabase.ts
import { Database } from '@/types';
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client-side Supabase client
export const createClientComponent = () => 
  createClient<Database>(supabaseUrl, supabaseKey);

// Server-side Supabase client
export const createServerComponent = () => 
  createClient<Database>(supabaseUrl, supabaseKey, {
    auth: { persistSession: false }
  });