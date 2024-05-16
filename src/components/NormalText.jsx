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
    <div className=' p-5 min-w-[50vw] min-h-[100vh] bg-[#262a31] text-white prose dark:prose-invert'>
    <ReactMarkdown remarkPlugins={[remarkMath , remarkGfm ]} rehypePlugins={[rehypeRaw , rehypeKatex]} children={code} />
    </div>
  )
}

export default NormalText