import React from 'react';
import ColorChange from '../ColorChange.gif';
import EditButton from '../EditButton.gif';
import Arrowdown from '../Arrowdown.png';

class Dnd extends React.Component {
   
    render(){
        return(
            <div className="dndPage">
                <h1>Project: Drag and Drop Colors</h1>
                <div className="gifs">
                    <img src={ColorChange} class="dnd-gif" alt="Gif of changing colors using drag and drop."/>
                    <img src={EditButton} class="dnd-gif" alt="Gif of edit button preventing any webpage interactions until 'OK' is Pressed"/>
                </div>
                <p>This is a project built with the applications of React.<br></br>
                    Users are able to drag and drop colors based on numbers.<br></br>
                    This project is my first team project. Check out the<br></br>
                    source code on GitHub.
                </p>
                <img src={Arrowdown} class="arrowImage" alt="Arrow down"/>
                <ul>
                    <a href="https://github.com/artjolameli/design-pad" target="_blank" className="project-github-link">Github</a>
                </ul>
            </div>
        )
    }

}

export default Dnd