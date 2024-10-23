import {resend} from "@/lib/resend"
import VerificationEmail from "../../email/VerificationEmail"
import { apiResponse } from "@/types/apiResponse"

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string

):Promise<apiResponse>{
    try {
        
      await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject:"Message App - Verification Code",
            react: VerificationEmail({username,otp:verifyCode}),
          });
        return {success:true,message:"Verification email sent successfully"}
    } catch (emailError) {
        console.error("Error sending verification email",emailError)
        return {
            success:false,
            message:"Failed to Send Verification Email "
        }
    }
}