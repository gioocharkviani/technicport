import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      firstName: string;
      email: string;
      lastName: string;
      phone: string;
      photo: string;
    };
  }
}