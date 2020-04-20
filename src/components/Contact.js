import React from 'react';

class Contact extends React.Component {
   
    EvtHandler() {
        alert("Sent!");
    }
    render(){
        return(
            <div>
                <h1>Contact Me</h1>
                <p>
                    Email: emonmiahprof@gmail.com
                </p>
                <h2>Tell Me What's On Your Mind :)</h2>
                <form>
                    <div>
                        <label>Name</label>
                        <input type='text'/>
                        <label>Email</label>
                        <input type='text'/>
                        <label>Write Away!</label>
                        <input type='text'/>
                    </div>
                </form>
                <button onClick={this.EvtHandler}>Submit</button>
            </div>
        )
    }

}

export default Contact