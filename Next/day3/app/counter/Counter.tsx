"use client"
import { loadComponents } from "next/dist/server/load-components";
import { Yeseva_One } from "next/font/google";
import {Component, useState} from "react"
export default function Counter(){
    const [count,setCount]=useState(0)
    return (
      <>
      <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button><br/>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </>
    );
}
