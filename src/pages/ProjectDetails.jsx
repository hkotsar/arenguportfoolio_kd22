import React, { useContext } from 'react';
import Header from '../components/header/Header';
import ProjectView from '../components/projectView/ProjectView';
import ProjectsContext from '../context/projects';
import { useParams } from 'react-router-dom';


const ProjectDetails = () => {
  const { id } = useParams();
  const data = useContext(ProjectsContext)

  const project = data.projects.find(((p) => p.id === Number(id)))

  if (!project) {
    return <div>Product not found</div>;
  } 

  console.log(project)

  return (
    <>
      <Header sticky={'header__sticky'} logoNone={'none'} />
      
      <ProjectView 
        title={project.title} 
        img={project.image}
        content={project.content}
        links={project.links}
        techList={project.tech} 
      />
    </>
    
  )
}

export default ProjectDetails
