import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return fetch('http://127.0.0.1:8000/dashboard/verify-admin/', {
    method: 'GET',
    headers: {
      Cookie: `access_token=${token}`,
    },
    credentials: 'include',
  })
    .then((response) => {
      if (response.status !== 200) {
        return NextResponse.redirect(new URL('/', request.url));
      }
      return NextResponse.next();
    })
    .catch(() => {
      return NextResponse.redirect(new URL('/', request.url));
    });
}

export const config = {
  matcher: ['/admin/:path*'],
};
