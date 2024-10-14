import noProjectImg from "../assets/no-projects.png"
import AddProjectBtn from "./AddProjectBtn";

export default function ProjectNotSelected({ onAddProjectStart }) {
    return (
        <div className="no-project-selected-wrapper text-center w-2/3 mt-28">
            <img src={noProjectImg} alt="no project image" className="w-16 h-16 object-contain mx-auto" />
            <h2 className="font-bold my-4 text-xl text-stone-500">No Project Selected</h2>
            <p className="mb-8 text-stone-400">Select a project or add new one</p>
            <AddProjectBtn onClick={onAddProjectStart}>Create new project</AddProjectBtn>
        </div>
    )
}