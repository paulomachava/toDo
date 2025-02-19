import clipboardSvg from '../assets/Clipboard.svg'

export function Tarefa(){
    return(
        <div className="flex flex-col items-center justify-center">
         
           
                <img src={clipboardSvg} alt="" />
                <p className='text-gray-300 text-base font-bold'>Você ainda não tem tarefas cadastradas</p>
                <p className='text-gray-300 text-base font-normal'>Crie tarefas e organize seus itens a fazer</p>

            
        </div>
    )

}