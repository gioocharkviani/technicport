import { withAuth } from "next-auth/middleware";

export default withAuth(
  {
    callbacks: {
      authorized: ({ req, token }) => {
        // Allow access to sign-in page for everyone
        // Dashboard access only for ADMIN role
        if (req.nextUrl.pathname.startsWith('/dashboard')) {
          return Boolean(token && token.role === 'ADMIN');
        }

        // Account pages require any authenticated user
        if (
          req.nextUrl.pathname.startsWith('/account') ||
          req.nextUrl.pathname.startsWith('/account/orders') ||
          req.nextUrl.pathname.startsWith('/account/payments') ||
          req.nextUrl.pathname.startsWith('/account/parameters') ||
          req.nextUrl.pathname.startsWith('/account/address')
        ) {
          return Boolean(token);
        }

        return Boolean(token);
      },
    },
  }
);

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/account/:path*',
  ],
};
