import React, { useRef } from 'react'

export default function Input(props) {
    const inputBox = useRef();
    return (
        <div className='p-3 flex justify-around'>
            <input className="w-64 p-3 mx-3 border-2 rounded-lg border-slate-200 outline-slate-600" type="text" placeholder="Add a task..." ref={inputBox} />

            <button onClick={()=>{
                props.handler(inputBox.current.value)
                inputBox.current.value = "";
            }} className="bg-[#866bab] rounded-2xl py-2 px-3 mx-3 text-slate-100 hover:bg-fuchsia-900"> Add </button>
        </div>
    )
}
