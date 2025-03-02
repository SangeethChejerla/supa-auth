// app/auth/callback/route.ts
import { createServerComponent } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  
  if (code) {
    const supabase = createServerComponent();
    await supabase.auth.exchangeCodeForSession(code);
  }

  // URL to redirect to after sign in process is complete
  return NextResponse.redirect(new URL('/dashboard', request.url));
}