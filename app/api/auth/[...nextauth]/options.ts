import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github"
import { GithubProfile } from "next-auth/providers/github";
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers:[
        // GitHubProvider({
        //   profile(profile: GithubProfile ){
            
        //     return {
        //       ...profile,
        //       role: profile.role ?? "user",
        //       id: profile.id.toString(),
        //       image: profile.avatar_url,

        //     }
        //   },
        //     clientId: process.env.GITHUB_ID as string,
        //     clientSecret: process.env.GITHUB_SECRET as string,
        // }),
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            username: {
              label: "Username:",
              type: "text",
              placeholder: "nikneim za adminpanela",
            },
            password: {
              label: "Password:",
              type: "password",
              placeholder: "passka za adminpanela",
            }
          },
          async authorize( credentials ) {

            const adminUsername = process.env.ADMIN_USERNAME;
            const adminPassword = process.env.ADMIN_PASSWORD;
        
            if (
              credentials?.username === adminUsername &&
              credentials?.password === adminPassword
            ) {
              // If the provided credentials match the environment variables, return the user
              const user = { id: '42', name: adminUsername, password: adminPassword, role: 'admin' };
              return Promise.resolve(user);
            } else {
              // If the credentials don't match, return null
              return Promise.resolve(null);
            }
          },
        })
        //     const user = { id:"42", name: "Dave", password: "asd", role: "admin"}

        //     if (credentials?.username === user.name && credentials?.password === user.password) {
        //       return user
        //     }
        //     else {
        //       return null
        //     }
        //   },
        // })


        
        
    ],

    callbacks: {

      async jwt({ token, user }) {
        if (user) token.role = user.role
        return token
      },
      async session({ session, token }) {
        if (session?.user) session.user.role = token.role
        return session
      }

    }
}
