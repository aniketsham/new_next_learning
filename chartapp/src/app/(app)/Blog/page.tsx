import React from 'react'
import Blog from '@/pages/blog'
import { Metadata } from 'next'
export const metadata:Metadata={

  title:"Blog",
  description:"Blog pages"
}
const page = () => {
  return (
    <div>
      <Blog/>
    </div>
  )
}

export default page
