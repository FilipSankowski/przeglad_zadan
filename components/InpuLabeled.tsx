type InputProps = {
    children?: React.ReactNode,
    type: string,
    value?: string,
    id?: string,
    className?: string,
    name?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
}

export default function InputLabeled({children, className = '', ...props} : InputProps) {
    return (
        <>
            {children} {children ? <br/> : <></>}
            <input 
            className={`${className} p-3 bg-gray-200 border-gray-500 border-2 outline-none hover:border-gray-800 focus:border-gray-800`}
            {...props}
            />
        </>
    )
}