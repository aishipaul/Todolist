"use client"

import React, { useState } from "react" 
import Box from "@/components/Box";
import Input from "@/components/Input";
const App = () => {
  
  const [todos , setTodo] = useState([]);
  
  const removetodo = (id) => {
        console.log(id); 
     const newTodos = todos.filter(
      (d,index) => {
        if (index !== id) {
          return true;
        }else{
          return false;
        }
      }
     )
     setTodo(newTodos); //state update
  }
  const addToDoHandler = (item) => {
    setTodo(
      [
        ...todos,
        {
          item,
        }
      ]
    )
  }
  return (
    <>
      <div className="main_div flex justify-center">
        <div className="center_div my-6 w-96 bg-white p-3 rounded-3xl shadow-xl outline-slate-600 border-1">
          <br />
          <h1 className=" p-3 bg-[#866bab] text-white flex justify-center font-bold rounded-2xl">
            TO DO LIST :
          </h1>

          <Input handler={addToDoHandler}/>

          <Box data={todos} removehandler={removetodo}/>
        </div>
      </div>

    </>
  )
};
export default App;