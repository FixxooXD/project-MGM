import Input  from "./Input"
import { useRef } from "react"

export default function NewProject({onAdd, onCancelProject}){
 
  const handleSave = () => {
    const enteredTitle = titleRef.current.value
    const enteredDescription = descriptionRef.current.value
    const enteredDueDate = dueDateRef.current.value

    onAdd({
       title: enteredTitle,
       description: enteredDescription,
       dueDate: enteredDueDate
    })
  }

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <button onClick={onCancelProject}>Cancel</button>
                <button onClick={handleSave} >Save</button>
            </menu>
            <div className="border-2">
             <Input type="text" ref={titleRef} label="Title" />
             <Input ref={descriptionRef} label="Description" textarea/>
             <Input type="date" ref={dueDateRef} label="Due Date"/>
            </div>
        </div>
    )
}