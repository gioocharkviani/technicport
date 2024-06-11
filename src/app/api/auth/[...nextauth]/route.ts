import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {},
                password: {},
              },

            async authorize(credentials, req) {
                const reqData = {
                    email: credentials?.email,
                    password: credentials?.password,
                }
                try {
                    const res = await axios.post(`${process.env.NEXTAUTH_URL}/api/auth/login`, reqData);
                    const user = res.data;
                    if (user) {
                        return user;
                    } else {
                        return res;
                    }
                } catch (error:any) {
                    return null;
                }
              }

        })
    ],
    
    callbacks: {
        async jwt({ token, user ,trigger,session}) {
          if(trigger === 'update'){
            return { ...token , ...session.user };
          }
          return { ...token, ...user };
        },
    
        async session({ session, token ,trigger }) {
          session.user = token as any;
          return session;
        },
        
      },  
      secret: process.env.NEXTAUTH_SECRET,
      session: {
        strategy: 'jwt',
        maxAge: 1 * 24 * 60 * 60,
      },
      
      pages: {
        signIn: '/signin',
      },
      
    })

export { handler as GET, handler as POST };