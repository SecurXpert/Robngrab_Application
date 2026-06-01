import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Ignore Next.js internals, API, and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }


  if (pathname === '/candidate/interview-management') {
    return NextResponse.redirect(new URL('/candidate/interview-management/Alex-Rivera', request.url));
  }

  return NextResponse.next();
}
