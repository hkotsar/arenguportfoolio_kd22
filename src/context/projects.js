import React, { createContext } from 'react';
import data from '../data/projects.json';

const ProjectsContext = createContext();

function Provider({ children }) {
   

    return (
        <ProjectsContext.Provider value={data}>
            {children}
        </ProjectsContext.Provider>
    )

}

export { Provider };
export default ProjectsContext
