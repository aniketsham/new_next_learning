import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcryptjs"
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";

export const authOptions:NextAuthOptions={
    providers:[
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials:{
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials:any):Promise<any>{
                await dbConnect()
                try {
                    const user=await UserModel.findOne({
                        $or:[
                            {email:credentials.identifier},
                            {username:credentials.identifier}

                        ]
                    })

                    if(!user){
                        throw new Error ("no user found with email")
                    }
                    if(!user.isVerified){
                        throw new Error("User should be verified first")
                    }
                    const isPassword=await bcrypt.compare(credentials.password,user.password)
                    if(isPassword){
                        console.log("user details")
                        console.log(user)
                        return user
                    }
                    else{
                        throw new Error("Incorrect Password")
                    }
                } catch (error:any) {
                    throw new Error(error)
                }
            }
        })


    ],
    callbacks:{
        async jwt({ token, user }) {

            if(user){
                token._id=user._id?.toString()
                token.isVerified=user.isVerified
                token.isAcceptingMessages=user.isAcceptingMessages
                token.username=user.username
            }
            console.log("token values")
            console.log(token)
            return token
          },
        async session({ session, token }) {

            if(token){
                session.user._id=token._id
                session.user.isVerified=token.isVerified
                session.user.isAcceptingMessages=token.isAcceptingMessages
                session.user.username=token.username
            }
            console.log("session")
            console.log(session)
            return session
          },
          
    },
    pages:{
        signIn:'/signin'
    },
    session:{
        strategy:"jwt"
    },
    secret:process.env.NEXT_AUTH_SECRET
}