import React from 'react';
import Kaher from '../Kaher.jpg';
class Home extends React.Component {
   
    render(){
        return(
            <div>
                <div className="name">
                    <h1>Kaher Miah</h1>
                </div>
                <div className="hello-welcome">
                    <p class="hello typewriter">Hello</p>
                </div>
                <img src={Kaher} class="myImage" alt="ME!"/>
            </div>

        )
    }

}

export default Home