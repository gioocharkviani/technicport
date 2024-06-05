import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith('/dashboard')) {
        return Boolean(token && token.role === 'ADMIN');
      }
      if (req.nextUrl.pathname.startsWith('/account') ||
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
});

export const config = { matcher: 
[
  '/dashboard' ,
  '/dashboard/addproduct' , 
  '/account',
  '/account/orders',
  '/account/parameters',
  '/account/address',
  '/account/payments'
] };
