import React, {forwardRef} from 'react'

const Input = forwardRef(function Input({label, textarea, ...props}, ref){
    const clasees = "w-full p-1 border-b-2 rounded-sm bg-stone-300 text-stone-600"
  return (
    <p className='text-sm flex flex-col gap-1 my-4 justify-center mx-4'>
        <label>{label}</label>
        {textarea ? <textarea ref={ref} className={clasees} {...props} /> : <input className={clasees} ref={ref} {...props} />}
    </p>
  )
})


export default Input