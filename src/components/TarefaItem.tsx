import { useState } from "react";



interface TaskProps{
     
    title:string;
    onDeleteTask:(task:string)=>void
    
   
}

export function TarefaItem({title,onDeleteTask}:TaskProps){
    
  const[done,setDone]= useState(false)
  const handleChangeDone=()=>{
    setDone(!done)
  }

    function handleDeleteTask(){
        onDeleteTask(title)
     
    }





return (
  <>
  <div onClick={handleChangeDone}  className={`flex w-full items-center justify-between p-4 gap-2 rounded-lg 
    ${done ? 'bg-gray-500 border-gray-500 ':'bg-gray-500 border-1 border-gray-400 shadow-box ' }`}>
<label className="flex items-center gap-2
">
<button
id="taskDone"
className={`w-5 h-5 flex items-center justify-center border rounded-full ${done ? 'bg-purple-dark border-purple-dark hover:bg-purple' : 'border-blue hover:bg-gray-400 hover:border-blue-dark'}`}
>
{done && (
  <svg
    className="w-4 h-4 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
)}
</button>
<label htmlFor="taskDone"
className={`${done ? 'line-through text-gray-100' : 'text-gray-100'}`}
>
{title}
</label>
</label>
<button
onClick={handleDeleteTask}
className="text-gray-100 hover:text-danger"
>
<svg
  className="w-5 h-5"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  ></path>
</svg>
</button>
</div>
</>
)
}