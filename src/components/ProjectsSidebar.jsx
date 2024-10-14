import AddProjectBtn from "./AddProjectBtn"
import ProjectsList from "./ProjectsList"

export default function ProjectsSidebar({ projects, selectedProject, onAddProjectStart, onProjectNameClick }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-tr-lg">
            <h2 className="text-center font-semibold uppercase text-white mb-7">Your Projects</h2>
            <AddProjectBtn customClass="w-full" onClick={onAddProjectStart}>+ Add Project</AddProjectBtn>
            {
                !!projects.length &&
                    <ProjectsList projects={projects} selectedProject={selectedProject} onProjectNameClick={onProjectNameClick} />
            }
        </aside>
    )
}