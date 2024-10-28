"use client"

import React from 'react'
import CandlestickChart from '@/components/candlestick'
import chartData from "@/lib/graph.json"
const page = () => {
  return (
    <div>
      <CandlestickChart data={chartData.response.data}/>
    </div>
  )
}

export default page
