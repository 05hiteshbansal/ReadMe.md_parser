"use client";
import axios from "axios";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

const DataFetching = ({ setCode }) => {
  const [data, setData] = useState({
    owner: "",
    name: "",
    branch: "main",
  });
  const { toast } = useToast();
  const dataf = async (e) => {
    e.preventDefault()
    const owner = data.owner;
    const name = data.name;
    const branch = data.branch || "main";
    if (!owner || !name) {
      toast({
        description: "Please enter Repositry Owner and Repositry Name",
        className:"dark:bg-yellow-200 p-4   font-serif font-bold dark:text-yellow-800 "
      });
    } else {
      try {
        const y = await axios.get(
          `https://raw.githubusercontent.com/${owner}/${name}/${branch}/README.md`
        );
        console.log(y.data);
        setCode(y.data);
      } catch (error) {
        toast({
          description: error.message,
          className:"dark:bg-yellow-400 p-4   font-serif font-bold dark:text-yellow-800"
        });
      }
    }
  };
  return (
    <>
      <Toaster />
      <form>
        <div className="flex flex-col lg:flex-row justify-between  items-center p-10 font-mono ">
          <div className="grid w-full max-w-sm items-center gap-1.5 ">
            <Label htmlFor="owner" className=" text-xl">
              Repository Owner
            </Label>
            <Input
              type="text"
             
              name="owner"
              placeholder=" 05hiteshbansal "
              className=" dark:bg-white"
              onChange={(e)=>setData({...data,owner:e.target.value})}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name" className=" text-xl">
              Repository Name
            </Label>
            <Input
              type="text"
            
              name="name"
              placeholder=" repositry_readme.md"
              className=" dark:bg-white"
              onChange={(e)=>setData({...data,name:e.target.value})}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="branch" className=" text-xl">
              Branch
            </Label>
            <Input
              type="text"
              
              name="branch"
              placeholder=" branch_main"
              className=" dark:bg-white"
              onChange={(e)=>setData({...data,branch:e.target.value})}
            />
          </div>
          <Button className=" text-lg" onClick={dataf}>
            Fetch
          </Button>
        </div>
      </form>
    </>
  );
};

export default DataFetching;
