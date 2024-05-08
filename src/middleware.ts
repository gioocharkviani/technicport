import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith('/dashboard')) {
        return Boolean(token && token.role === 'ADMIN');
      }
      return Boolean(token);
    },
  },
});

export const config = { matcher: ['/dashboard','/dashboard/addproduct' ] };
