import React from 'react';

class About extends React.Component {
   
    render(){
        return(
            <div className= "about">
            <div>
                <h1>About Me</h1>
                <p>Hello! Welcome to my website. My name is Kaher Miah. I am aspiring to become a
                    professonal programmer. Problem solving and learning are two things I am passionate
                    about. After all, it's fun!
                </p>
                <ul className="resume-link">
                    <a href="https://drive.google.com/file/d/1CqL6GSZ1Wut9u0VI3EEmQOTmOHRt8vXk/view?usp=sharing" target="_blank" >Resume</a>
                </ul>
            </div>
            </div>
        )
    }

}

export default About