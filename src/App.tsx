import { Button } from "./components/Buttton"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import plusSvg from './assets/plus.svg'

import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"

import { TarefaItem } from "./components/TarefaItem"
import { Tarefa } from "./components/Tarefa"





export function App() {

  
 
  const [tasks,setTasks] = useState<string[]>([])
  const [newTask,setNewTask] =useState('')
  const [checkedTasks, setCheckedTasks] = useState<boolean[]>([])
 
 

  function handleCreateNewTask(event:FormEvent){
    event.preventDefault()
  if(newTask.trim()){
  setTasks([...tasks,newTask])
  setCheckedTasks([...checkedTasks, false]); 
  setNewTask('')
  } 
    
  }
  
function handleNewTaskChange(event:ChangeEvent<HTMLInputElement>){
  event.target.setCustomValidity('')
  setNewTask(event.target.value)
}

function handleDeleteTask(taskToDelete:string){
  const taskDelete = tasks.filter(task =>{
    return task !== taskToDelete
  })
  setTasks(taskDelete)
}

function handleNewTaskInvalid(event:InvalidEvent<HTMLInputElement>){
  event.target.setCustomValidity('Esse campo e obrigatorio')
 }



  return (
     <div className="bg-gray-600 w-screen h-screen">
       <div className="flex items-center flex-col justify-center pt-[72px] outline-color-[#5E60CE] pb-[80px] bg-gray-700">
      <Header/>
      </div>
      <div className="w-[668px] flex flex-col m-auto">

       <form className="flex items-center justify-center gap-[0.5rem] mt-[-22px] " onSubmit={handleCreateNewTask}>
        <Input 
           placeholder="Adicione uma nova tarefa"
           onChange={handleNewTaskChange} 
           value={newTask}
           onInvalid={handleNewTaskInvalid}
           required
           />
        <Button 
            type="submit" 
           >Criar<img src={plusSvg} alt="" />
        </Button>
       </form>

       <div className="mt-16">
       <div className="">
            <header className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                <p className="text-blue-400 ">Tarefas criadas</p>
                <span className="text-gray-200 bg-gray-400  rounded-full text-xs flex px-2">{tasks.length}</span>
                </div>
                <div className="flex items-center gap-2">
                <p className="text-purple-400 ">Concluidas</p>
                <span className="text-gray-200 bg-gray-400  rounded-full text-xs flex px-2" >0 de {tasks.length}</span>
                </div>
                
            </header>
            <div className="flex flex-col items-center gap-1 py-16 justify-center border-t-1 border-gray-400 rounded-xl">
             
             
              {
                tasks.length===0 ?  ( <Tarefa/>):

                tasks.map((task=>(
                 <TarefaItem 
                   title={task}
                   key={task}
                   onDeleteTask={handleDeleteTask}
                   
                   
                 />  

                )))
              
              }
            </div>
        </div>
       

       </div>
       </div>
    </div>
  )
}

