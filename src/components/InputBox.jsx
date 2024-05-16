"use client"
import React, { useState } from "react";

import Editor from "@monaco-editor/react";

const InputBox = ({ language,code,setCode }) => {
  const [value, setValue] = useState(code || "");
  const handleEditorChange = (value) => {
    setValue(value);
    setCode(value)
    console.log(value);
     };

  return (
  <div className=" flex flex-col">

    <div className=" text-center text-xl font-serif bg-[#FFF455] p-2 text-[#007F73]">
      Editor
    </div>
    <div className="rounded-md w-[50vw] min-h-[100vh] shadow-4xl text-lg">
      <Editor
      
        width={`100%`}
        language={language || "markdown"}
        value={code}
        theme="vs-dark"
        defaultValue={code}
        onChange={handleEditorChange}
        options={{
          fontSize:18,
          wordWrap: "on",
        }
        }
      />
    </div>
  </div>
  );
};
export default InputBox;