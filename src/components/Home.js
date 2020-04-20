import React from 'react';
import Kaher from '../Kaher.jpg';
class Home extends React.Component {
   
    render(){
        return(
            <div>
                <div className="name">
                    <h1>Kaher Miah
                        (NOTE ADD SOME SORT OF ANIMATION)
                    </h1>
                </div>

                <img src={Kaher} class="myImage" alt="ME!"/>
            </div>

        )
    }

}

export default Home