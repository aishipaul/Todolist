"use client"

import React, { useState } from "react"
import Box from "@/components/Box";
const App = () => {
  const [inputlist, setInputlist] = useState([
    "Hello", "Bye"
  ]);
  const [done, setDone] = useState(false);
  const [newtodo, setnewtodo] = useState("")

  const Addtodo = () => {
    inputlist.push(newtodo)
    inputlist.map(item => console.log(item))
    setnewtodo("")
  }
  return (
    <>
      <div className="main_div flex justify-center">
        <div className="center_div my-6 w-96 bg-white p-3 rounded-3xl shadow-xl outline-slate-600 border-1">
          <br />
          <h1 className=" p-3 bg-[#866bab] text-white flex justify-center font-bold rounded-2xl">
            TO DO LIST :
          </h1>
          <br />
          <input className="w-64 p-3 mx-3 border-2 rounded-lg border-slate-200 outline-slate-600" type="text" required placeholder="Add a task..." value={newtodo} onChange={e => setnewtodo(e.target.value)} />

          <button onClick={Addtodo} className="bg-[#866bab] rounded-full py-2 px-3 mx-3 text-slate-100 hover:bg-fuchsia-900"> Add </button>
          {/* <Box inputlist={inputlist}/> */}
          <div className="p-3">
            {inputlist.map(item =>
              <div onClick={() => setDone(!done)} className={`${done === true ? 'line-through' : ''} select-none cursor-pointer w-full border-bottom-1 p-2 text-[#866bab] flex justify-between`}>
                <div>
                  {item}
                </div>
                <div>
                  <button className="bg-[#866bab] rounded-full py-1 px-2 text-xs text-slate-100 hover:bg-fuchsia-900 -mx-3"> Delete </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </>
  )
};
export default App;