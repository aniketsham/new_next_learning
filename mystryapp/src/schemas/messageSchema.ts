import {z} from "zod"

export const messageSchema=z.object({
        content:z.string().min(10,{message:"Content should be bigger than 10 charcters"})
        .max(300,{message:"Content should not be bigger than 300 charcters"}),
  
})