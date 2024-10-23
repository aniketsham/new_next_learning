import { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    
    },
    ),

    /*GitHubProvider({
      clientId: "Ov23liWrpWay48MRCWM6",
      clientSecret: "074c20ce12f6b00cec022459bfe318e4db773c45"
    }),*/
    // Add more providers here if needed
  ],
  pages: {
    signIn: '/auth/signin', // Custom sign-in page
    signOut: '/auth/signout', // Custom sign-out page
    error: '/auth/error', // Error page
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email_verified && profile.email.endsWith("@gmail.com")
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token to the token right after sign in
      
      if (account) {
        console.log("account")
        console.log(account)
        token.accessToken = account.access_token;
      }

      console.log(token)
      return token;
    },
    
    
    async session({ session, token }) {
      // Send token to the client as part of the session
      console.log("Session")
      console.log(session)
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
