import React from 'react';

class Contact extends React.Component {
   
    EvtHandler() {
        alert("Message sent!");
    }
    render(){
        return(
            <div className="contactPage">
                <h1>Contact Me</h1>
                <p>
                    Email: emonmiahprof@gmail.com
                </p>
                <h2>Send Me Your Thoughts</h2>
                <form className="form">
                        <label>Name: </label>
                        <input type='text' id="userName"/>
                        <label>Email: </label>
                        <input type='text'/>
                        <label>Write Away!</label>
                        <input type='message' />
                </form>
                <button onClick={this.EvtHandler} className="button">Submit</button>
            </div>
        )
    }

}

export default Contact