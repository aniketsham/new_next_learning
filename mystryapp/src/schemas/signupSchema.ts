import {z} from "zod"

export const usernameValidation=
z.string()
.min(2,"Username should be at least 2 charcters")
.max(20,"Username should be at most 20 charcter")
.regex(/^[a-zA-Z0-9]+$/,"Username should not contain special charcter")

export const signUpSchema=z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid email address"}),
    password:z.string().min(6,{message:"password should be atleast 6 charcters"})
})

