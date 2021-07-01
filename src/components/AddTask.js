import React from 'react'
import { useState } from 'react'
export const AddTask = ({handleAdd}) => {
const [text, setText] = useState('')
    return (
        <div>
            <input type="text" placeholder="new task" onChange={(e) => {
                setText(e.target.value)   
            }} value={text} />
            <button onClick={()=>{handleAdd(text);setText("")}}>Add</button>
        </div>
    )
}
