import { useRef } from 'react';

export default function ProjectPage({ project, tasks, onAddTask, onClearTask, onProjectDelete }) {
    const taskInput = useRef();
    const projectTasks = tasks.filter(task => task.projectId === project.id);

    let tasksContent = <p>There are no tasks for this project</p>;
    if (projectTasks && projectTasks.length) {
        tasksContent = (<ol className="bg-cyan-100 py-10 px-5 rounded">
            {projectTasks.map((task, i) => {
                return (
                    <li className={`${i !== 0 ? 'mt-2' : ''} flex justify-between`} key={task.id}>
                        <span>{task.text}</span>
                        <button onClick={() => onClearTask(task.id)}>Clear</button>
                    </li>
                )
            })}
        </ol>);
    }

    const formattedDate = new Date(project.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });


    return (
        <div className="w-[55rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex justify-between">
                    <h1 className="font-bold text-2xl">{project.title}</h1>
                    <button className="mr-4" onClick={() => onProjectDelete(project.id)}>Delete</button>
                </div>
                <p className="my-2">{formattedDate}</p>
                <p>{project.description}</p>
            </header>
            <div className="tasks">
                <h2 className="text-left font-semibold uppercase text-black">Tasks</h2>
                <div className="my-5">
                    <input type="text" className="bg-slate-200 focus:bg-slate-300 w-96 mr-5 py-1 px-3 rounded" ref={taskInput} />
                    <button onClick={() => {
                        onAddTask(taskInput.current.value);
                        taskInput.current.value = '';
                    }}>Add Task</button>
                </div>
                {tasksContent}
            </div>
        </div>
    )
}