// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define your public and private routes
const publicRoutes = ['/auth/login', '/auth/register', '/']; // Routes accessible without auth
const privateRoutes = ['/dashboard', '/profile', '/settings']; // Routes requiring auth
const authRoutes = ['/auth/login', '/auth/register']; // Auth-specific routes 

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Get the token from cookies - adjust based on your auth implementation
  const token = request.cookies.get('auth-token')?.value;
  const isAuthenticated = !!token;

  // Case 1: User is authenticated but tries to access auth routes (login/register)
  // Redirect to dashboard
  if (isAuthenticated && authRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Case 2: User is not authenticated but tries to access private routes
  // Redirect to login
  if (!isAuthenticated && privateRoutes.some(route => pathname.startsWith(route))) {
    // Store the original URL to redirect after login
    const redirectUrl = new URL('/auth/login', request.url);
    redirectUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // Allow the request to continue
  return NextResponse.next();
}

// Configure which paths the middleware runs on
export const config = {
  matcher: [
    // Match all routes except static files, api routes, and _next
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};