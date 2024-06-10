//import {compile} from '@mdx-js/mdx'
// import React from 'react'
//import Markdown from 'react-markdown'
 import remarkGfm from 'remark-gfm'
// import markdownit from 'markdown-it'
// import {MDXProvider} from '@mdx-js/react'
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

const NormalText = ({code}) => {
  
  // const md = markdownit();

  //const compiled = await compile(code);
  // const y=
   //console.log(compiled);
  return (
    <>
    <div className='flex flex-col w-full h-[100vh]'>
<div className='text-center text-xl font-serif bg-[#FFF455] p-2 text-[#007F73]'>
    Output
</div>
    <div className=' dark:prose-invert p-5 max-w-none min-h-full overflow-y-scroll bg-[#262a31] text-white prose '>
    
    <ReactMarkdown remarkPlugins={[remarkMath , remarkGfm ]} rehypePlugins={[rehypeRaw , rehypeKatex]}  >{code}</ReactMarkdown>
    </div>
    </div>

    </>
  )
}

export default NormalText