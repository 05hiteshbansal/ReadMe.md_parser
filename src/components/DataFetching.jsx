"use client"
import axios from 'axios'
import { Input } from 'postcss'
import React from 'react'

const DataFetching = ({setCode}) => {
    const data=async(e)=>{
        e.preventDefault()
        const y= await axios.get(`https://raw.githubusercontent.com/VanshKing30/FoodiesWeb/main/README.md`);
        console.log(y.data);
        setCode(y.data)
    }
    return (
    <>
    <form>
    <input type='text'/>
    <input type='text'/>
    <input type='text'/>
    <button  onClick={data}>Submit</button>
    </form>
    </>
  )
}

export default DataFetching