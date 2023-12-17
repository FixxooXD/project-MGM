import React, {useState} from 'react'

const NewTask = ({onAdd}) => {

    const [enteredTask, setEntredTask ] = useState("");

    const handleChange = (e) => {
        setEntredTask(e.target.value);
    } 
    const handleClick = () => {
        onAdd(enteredTask)
        console.log(enteredTask);
        setEntredTask("")
    } 

  return (
    <div className='flex items-center gap-4'>
        <input onChange={handleChange} value={enteredTask} type='text' className='w-64 px-2 py-1 rounded-sm bg-stone-200'/>
        <button onClick={handleClick} className='text-stone-700 hovertext-stone-900'>Add Task</button>
    </div>
  )
}

export default NewTask