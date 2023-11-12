export default function InputLabeled({children, className = '', ...props} : {children: React.ReactNode, className: string, props: React.InputHTMLAttributes<HTMLInputElement>}) {
    return (
        <div>
            <span>
                {children}
            </span> <br />
            <input 
            className={`${className} p-3 bg-gray-200 border-gray-500 border-2 outline-none hover:border-gray-800 focus:border-gray-800`}
            {...props}
            />
        </div>
        
    )
}