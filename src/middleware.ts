// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  
  // Refresh session if expired
  await supabase.auth.getSession();
  
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Check if the route is protected
  const isProtectedRoute = req.nextUrl.pathname.startsWith('/dashboard');
  const isAuthRoute = req.nextUrl.pathname.startsWith('/auth');

  // Redirect unauthenticated users from protected routes
  if (isProtectedRoute && !session) {
    const redirectUrl = new URL('/auth/login', req.url);
    return NextResponse.redirect(redirectUrl);
  }

  // Redirect authenticated users from auth pages
  if (isAuthRoute && session && req.nextUrl.pathname !== '/auth/callback') {
    const redirectUrl = new URL('/dashboard', req.url);
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/:path*'],
};