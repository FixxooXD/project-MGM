import React from 'react'
import { Button } from './Button'

export const NoProjectSelected = ({onStartAddProject}) => {
  return (
    <div className='flex w-1/3 items-center justify-center gap-4 my-4 flex flex-col'>
        <h1 className='font-bold text-stone-800'>No Project</h1>
        <h3 className='text-sm '>Select a project or get started</h3>
        <Button onClick={onStartAddProject}>Create Project</Button> 
    </div>
  )
}
