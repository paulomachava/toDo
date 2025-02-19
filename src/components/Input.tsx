
export function Input({...rest}){
    return(
        <div>
            <input type="text"  
            className="bg-gray-500 w-[600px] rounded-[0.5rem] border-[0.5px] border-gray-500 py-[1rem] px-[1rem] outline-none text-gray-300 focus:border-[1px] focus:border-purple-dark focus:text-gray-100 placeholder-gray-300"
            {...rest}
            />
        </div>
    )
}