
export const Button = ({children, ...props}) => {
  return (
    <button  className="text-sm px-2 py-2 bg-[#222] w-32 text-white" {...props}>
        {children}
    </button>
  )
}
