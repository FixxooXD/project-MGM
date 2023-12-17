import React from "react";
import { Button } from "./Button";


export const ProjectSideContent = ({ onStartAddProject, projects, onSelectProject, selectedProjectId }) => {

  return (
    <aside className="bg-black w-1/3 px-8 py-16 text-white mt-4 rounded-r-2xl">
      <h2 className="text-sm px-4 py-2">Your Projects</h2>
      <Button onClick={onStartAddProject}>++Add Projects</Button>

      <ul className="mt-4">
        {projects.map((proj) => {
       
      let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"

       if(proj.id === selectedProjectId){
        cssClasses += " bg-stone-800 text-stone-200"
       }else {
        cssClasses += ' text-stone-400'
       }
        
          return (
            <li key={proj.id}>
              <button onClick={() => onSelectProject(proj.id)} className={cssClasses} >{proj.title}</button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
