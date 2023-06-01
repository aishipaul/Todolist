"use client"

import React, { useState } from "react" 
import Box from "@/components/Box";
const App = () => {
  const[inputlist , setInputlist] = useState("");
  const itemEvent = (event) => { setInputlist(event.target.value) }
  const [todos , setTodo] = useState([]);
  return (
    <>
      <div className="main_div flex justify-center">
        <div className="center_div my-6 w-96 bg-white p-3 rounded-3xl shadow-xl outline-slate-600 border-1">
          <br />
          <h1 className=" p-3 bg-[#866bab] text-white flex justify-center font-bold rounded-2xl">
            TO DO LIST :
          </h1>
          <br />
          <input className="w-64 p-3 mx-3 border-2 rounded-lg border-slate-200 outline-slate-600" type="text" placeholder="Add a task..." onChange={itemEvent} />

          <button className="bg-[#866bab] rounded-full py-2 px-3 mx-3 text-slate-100 hover:bg-fuchsia-900"> Add </button>
          <Box/>
        </div>
      </div>

    </>
  )
};
export default App;