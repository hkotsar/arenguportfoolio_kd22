import React, { useContext } from 'react';
import ProjectsContext from '../context/projects';
import ProjectCard from '../components/ProjectCard';

const ProjectList = ({ category }) => {
    const data = useContext(ProjectsContext)
   
  
    const filteredCategory = data.projects.filter(item => item.category === category);

    

  return (
    <div className="projects__list">
       
        {filteredCategory.map(item => (

                 

            <ProjectCard key={item.id} url={item.id} title={item.title} subtext={item.subtext} image={item.image} icon={item.icon} />
      
            
               
        ))}
        
    </div>
  )
}

export default ProjectList


