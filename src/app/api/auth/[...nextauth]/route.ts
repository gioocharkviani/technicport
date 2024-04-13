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

                const userData = {
                    email: credentials?.email,
                    password: credentials?.password,
                }
              
                
                const res = await axios.post(`${process.env.NEXTAUTH_URL}/api/auth/login` , userData);
                const user = await res.data;
                if(user){
                    return user;
                } else {
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

   
})

export { handler as GET, handler as POST };