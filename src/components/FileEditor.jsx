"use client"
import React, { useState } from 'react'
import InputBox from '@/components/InputBox'
import NormalText from './NormalText'
import ThemeDropdown from './dropdown'
import DataFetching from './DataFetching'
const FileEditor = () => {
    const [code,setCode]= useState("// some comment")
    //const [theme,setTheme]=useState({})
  return (
   <>
   <div className=' bg-amber-400'>
   <div className=' text-center text-3xl font-mono p-4 text-yellow-800'>
      Online Editor to read .MD   </div>
      <DataFetching setCode={setCode}/>
      {/* <ThemeDropdown theme={theme} setTheme={setTheme} /> */}
   <div className='flex flex-row '>
        <InputBox code={code} setCode={setCode} />
        <NormalText code={code}/>
    </div>
   </div>
   </>
  )
}

export default FileEditor