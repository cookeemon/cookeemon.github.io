import React from 'react';
import { Link } from 'react-router-dom';

class Projects extends React.Component {
   
    render(){
        return(
            <div className="projectsPage">
                    <h1 className="projectsTitle">Projects</h1>
                <ul className="project-links">
                <Link to='/drag-and-drop-project' className="linksstyling2">
                        <li>Drag and Drop Colors | (2020)</li>
                    </Link>
                </ul>
            </div>
        )
    }

}

export default Projects