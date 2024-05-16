"use client"
import React, { useState } from "react";

import Editor from "@monaco-editor/react";

const InputBox = ({ language,code,setCode }) => {
  const [value, setValue] = useState(code || "");
  const handleEditorChange = (value) => {
    setValue(value);
    setCode(value)
    console.log(value);
    // onChange("code", value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-[50vw] min-h-[50vh] shadow-4xl text-lg">
      <Editor
        height="100%"
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
  );
};
export default InputBox;