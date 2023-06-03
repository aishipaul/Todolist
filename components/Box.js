"use client"

import React from "react"
import Item from "./Item"

export default function Box(props) {
    const items = props.data.map(
        (singleData , index) => {
            return <Item removehandler={props.removehandler} key={index} id={index} item = {singleData.item}/>
        }
    )
    return (
        <div className="p-3"> 
        {items}

        </div>
    )
}