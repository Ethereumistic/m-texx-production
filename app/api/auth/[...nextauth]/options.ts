import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.providerAccountId === "122126874") {
        // Allow sign-in for the specific GitHub account
        return true;
      } else {
        // Deny access for others
        return false;
      }
    },
  },
};


