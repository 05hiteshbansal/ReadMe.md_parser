"use client"
import React, { useState } from 'react'
import InputBox from '@/components/InputBox'
import NormalText from './NormalText'
import DataFetching from './DataFetching'
const FileEditor = () => {
    const [code,setCode]= useState("// some comment")
    //const [theme,setTheme]=useState({})
  return (
   <>
   <div>
   <div className=' bg-amber-400 text-center text-3xl font-mono p-4 text-yellow-800'>
      Online Editor to read .MD   
      <DataFetching setCode={setCode}/>
      {/* <ThemeDropdown theme={theme} setTheme={setTheme} /> */}
</div>
   <div className='flex flex-row bg-black gap-1 flex-1'>
        <InputBox code={code} setCode={setCode} />
        <NormalText code={code}/>
    </div>
   </div>
   </>
  )
}

export default FileEditor