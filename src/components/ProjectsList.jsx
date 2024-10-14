export default function ProjectsList({ projects, selectedProject, onProjectNameClick }) {
    return <ol className="mt-7">
        {
            projects.map((project, i) =>
                <li
                    className= {`text-gray-300 p-1 ${project.id === selectedProject ? 'bg-gray-800' : ''} cursor-pointer hover:bg-gray-700`}
                    key={i}
                    onClick={() => onProjectNameClick(project.id)}
                >{project.title}</li>
            )
        }
    </ol>
}