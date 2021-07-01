import React from 'react'

export const Task = ({el,handleDelete,handleComplete}) => {
    
    return (
        <div>
           <p className={el.isDone ? "done" : null}> {el.task} </p> 
           <div>
              <button onClick={() => { handleComplete(el.id)
                  
              }}>{el.isDone ? "incomplete":"completed"}</button> 
              <button onClick={() => { handleDelete(el.id)
                  
              }} >delete</button>
           </div>
        </div>
    )
}
