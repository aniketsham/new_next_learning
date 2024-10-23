import User from "@/models/userModel";
import nodemailer from "nodemailer"
import bcryptjs from "bcryptjs"
export const sendEmail=async({email,emailType,userId}:any)=>{
    try{
        const hashedToken=await bcryptjs.hash(userId.toString(),10)
        if(emailType==="VERIFY"){
            await User.findByIdAndUpdate(userId,{
                $set:{
                    verifyToken:hashedToken,verfiyTokenExpiry:Date.now()+3600000

                }
            })
        }
        else if (emailType==="RESET"){
            await User.findByIdAndUpdate(userId,{
                $set:{
                    forgotPasswordToken:hashedToken,forgotPasswordExpiry:Date.now()+3600000

                }
            })
        }
        // Looking to send emails in production? Check out our Email API/SMTP product!
        var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "61701273f2b271",
      pass: "126bb7461a1eef"
    }
  });

        const mailOptions={
            from: 'anikets2408@gmail.com', 
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email":"Reset your password", 
            html: `<p>Click  <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">Here</a> to 
            ${emailType === "VERIFY" ? "Verify your email":"Reset your password"} or copy paste the url in the browser<br/>
            ${process.env.DOMAIN}/verifyEmail?token=${hashedToken}
            </p>`, // html body
          }

          const mailResponse = await transport.sendMail(mailOptions)
          return mailResponse
    }
    catch(error:any){
        throw new Error(error.message)
    }
}