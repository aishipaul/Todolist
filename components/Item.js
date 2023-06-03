import React, { useState } from 'react'

export default function Item(props) {
    const [done,setDone] = useState(false);
  return (
    <div onClick={() => setDone(!done)} className={`${done === true ? 'line-through' : ''} select-none cursor-pointer w-full p-2 text-[#866bab] flex justify-between items-center`}>
      <div>
            {props.item}
      </div>
      <div>
      <button onClick={() => props.removehandler(props.id)} className="bg-[#866bab] rounded-lg py-1 px-2 text-xs text-slate-100 hover:bg-fuchsia-900 -mx-3"> Delete </button>
      </div>
    </div>
  )
}
