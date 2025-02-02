'use client'
import { useToast } from '@/hooks/use-toast'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useParams, useRouter } from 'next/navigation'
import * as z  from "zod"
import { Form,FormControl,FormField,FormItem, FormMessage, FormLabel } from '@/components/ui/form'
import { Input } from "@/components/ui/input"

import React from 'react'
import { verifySchema } from '@/schemas/verifySchema'
import axios,{AxiosError} from 'axios'
import { apiResponse } from '@/types/apiResponse'
import { Button } from '@/components/ui/button'

const VerifyAccount= () => {
    const router =useRouter()
    const params=useParams<{username:string}>()
    const {toast} =useToast()

    
  const form =useForm<z.infer<typeof verifySchema>>({
    resolver:zodResolver(verifySchema),
    
  })

  const onSubmit=async(data:z.infer<typeof verifySchema>)=>{
    try {
        const response=await axios.post("/api/verifyCode",{
            username:params.username,
            code:data.code
        })
        toast({
            title:'Success',
            description:response.data.message
        })

        router.replace('/signin')
    } catch (error) {
        console.log("Error while signup error",error)
      const axiosError=error as AxiosError<apiResponse>
      let errorMessage=axiosError.response?.data.message
      toast({
        title:"Signup Failed",
        description:errorMessage,
        variant:"destructive"
      })
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Verify Your Account
          </h1>
          <p className="mb-4">Enter the verification code sent to your email</p>
        </div>


        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Verification Code</FormLabel>
              <FormControl>
                <Input placeholder="Code" {...field} />
              </FormControl>
         

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
        </div>



    </div>
  )
}

export default VerifyAccount
