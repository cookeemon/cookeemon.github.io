import React from 'react';
import { Link } from 'react-router-dom';

class Projects extends React.Component {
   
    render(){
        return(
            <div>
                <div className="yeet">
                    <h1>Projects</h1>
                </div>
                <ul className="project-links">
                <Link to='/drag-and-drop-project'>
                        <li>Project 1: Drag and Drop Colors</li>
                    </Link>
                </ul>
            </div>
        )
    }

}

export default Projects