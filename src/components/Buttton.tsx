

type Props = React.ComponentProps<"button"> &{
    label?:string
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Button({label,type="submit",...rest}:Props){
    return(
        <button 
        type={type}
        
        className='text-gray-100  bg-blue-600  rounded-[0.5rem]  flex items-center justify-center gap-[0.5rem] hover:bg-blue-400 cursor-pointer p-4'   {...rest}>
           
        </button>
    )
}