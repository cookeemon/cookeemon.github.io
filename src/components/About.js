import React from 'react';
import Arrowdown from '../Arrowdown.png';

class About extends React.Component {
   
    render(){
        return(
            <div className= "aboutPage">
                <h1>About Me</h1>
                    <p className="aboutPage2">Hello! Welcome to my website. My name is Kaher Miah. Currently,<br></br>
                        I live in New York. I go to Lehman College as a full time student. I am aspiring to become a<br></br>
                        professonal programmer. Problem solving and learning are two things I am very passionate about.<br></br>
                        After all, it's fun!
                    </p>
                    <p className="aboutPage3">
                        Anyways, check out my resume below.
                    </p>
                    <img src={Arrowdown} class="arrowImage" alt="Arrow down"/>
                <ul className="resume-links">
                    <a href="https://drive.google.com/file/d/1CqL6GSZ1Wut9u0VI3EEmQOTmOHRt8vXk/view?usp=sharing" target="_blank" 
                    className= "resume-link">Resume</a>
                </ul>
            
            </div>
        )
    }

}

export default About