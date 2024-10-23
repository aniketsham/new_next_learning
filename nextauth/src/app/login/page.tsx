"use client"
import {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {toast} from "react-hot-toast";
export default function Login() {
  const router=useRouter()
  const [user,setUser]=useState({
    email:"",
    password:""
  })

  const [buttonDisabled,setButtonDisabled]=useState(false)
  const [loading,setLoading]=useState(false)
  const onLogin=async()=>{
    try {
      setLoading(false)
      const response=await axios.post("/api/users/login",user)
      console.log("Login success",response.data)
      router.push("/profile")
    } catch (error:any) {
      console.log("Login failed")
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(user.email.length > 0 && user.password.length > 0 ) {
      setButtonDisabled(false);
  } else {
      setButtonDisabled(true);
  }
  },[user])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl mb-4">{loading ? "Processing" : "Login"}</h1>
      <hr />
      <label className="mb-2" htmlFor="email">Email</label>
      <input 
      className="p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({...user, email: e.target.value})}
          placeholder="email"
          />
      <label className="mb-2" htmlFor="password">Password</label>
      <input 
      className="p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({...user, password: e.target.value})}
          placeholder="password"
          />
          <button
          onClick={onLogin}
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled ? "No login" : "Login"}</button>
          <Link href="/signup">Visit signup page</Link>
      </div>
  )
}
