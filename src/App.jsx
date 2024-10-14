import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import ProjectPage from "./components/ProjectPage";
import ProjectAdd from "./components/ProjectAdd";
import ProjectNotSelected from "./components/ProjectNotSelected";

function App() {
  const [ projectsState, setProjectsState ] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });


  function handleAddProjectStart() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  function handleAddProject(projectData) {
    const { title, description, date } = projectData;
    const newProject = {
      title,
      description,
      date,
      id: Math.random()
    }

    setProjectsState(prevState => {
      return {
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
        tasks: prevState.tasks
      }
    })
  }

  function handleSidebarShowProject(pid) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: pid
      }
    })
  }

  function handleDeleteProject(pid) {
    setProjectsState(prevState => {
      return {
        selectedProjectId: undefined,
        projects: [...prevState.projects.filter(p => p.id !== pid)],
        tasks: prevState.tasks
      }
    })
  }

  function handleAddTask(text) {
    setProjectsState(prevState => {
      const tid = Math.random();
      const pid = prevState.selectedProjectId;
      const task = {
        id: tid,
        text,
        projectId: pid
      };

      return {
        ...prevState,
        tasks: [task, ...prevState.tasks]
      }
    })
  }

  function handleClearTask(tid) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: [...prevState.tasks.filter(task => task.id !== tid)]
      }
    });
  }

  let selectedProject = projectsState.projects.find(p => p.id === projectsState.selectedProjectId);
  let template = <ProjectPage
                    project={selectedProject}
                    tasks={projectsState.tasks}
                    onAddTask={handleAddTask}
                    onClearTask={handleClearTask}
                    onProjectDelete={handleDeleteProject}
                  />

  if (projectsState.selectedProjectId === null) {
    template = <ProjectAdd onAddProject={handleAddProject} onCancelAddProject={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    template = <ProjectNotSelected onAddProjectStart={handleAddProjectStart} />
  }



  return (
    <main className="h-[95.5vh] mt-8 flex gap-8">
      <ProjectsSidebar
        projects={projectsState.projects}
        selectedProject={projectsState.selectedProjectId}
        onAddProjectStart={handleAddProjectStart}
        onProjectNameClick={handleSidebarShowProject}
      />
      {template}
    </main>
  );
}

export default App;
