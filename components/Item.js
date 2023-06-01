import React, { useState } from 'react'

export default function Item() {
  const [done, setDone] = useState(false);
  return (
    <div onClick={() => setDone(!done)} className={`${done === true ? 'line-through' : ''} select-none cursor-pointer w-full border-bottom-1 p-2 text-[#866bab] flex justify-between`}>
      <div>
        Item
      </div>
      <div>
        <button className="bg-[#866bab] rounded-full py-1 px-2 text-xs text-slate-100 hover:bg-fuchsia-900 -mx-3"> Delete </button>
      </div>
    </div>
  )
}
