import React from 'react';
import ColorChange from '../ColorChange.gif';
import EditButton from '../EditButton.gif';

class Dnd extends React.Component {
   
    render(){
        return(
            <div>
                <h1>Project: Changing Colors</h1>
                <img src={ColorChange} class="dnd-gifOne" alt="Gif of changing colors using drag and drop."/>
                <img src={EditButton} class="dnd-gifTwo" alt="Gif of edit button preventing any webpage interactions until 'OK' is Pressed"/>
                <p>A brief description of the technologies you used</p>
                <ul className="project-github-link">
                    <a href="https://github.com/artjolameli/design-pad" target="_blank" >Project Code on Github</a>
                </ul>
            </div>
        )
    }

}

export default Dnd