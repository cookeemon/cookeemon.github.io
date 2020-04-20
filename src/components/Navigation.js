import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo.png'


class Navigation extends React.Component {
   
    render(){
        return(
            <nav>
                <Link to='/'>
                    <img src={Logo} class="myLogo" alt="LOGO!"/>
                </Link>

                <ul className="nav-links">
                    <Link to='/about-me'>
                        <li>About Me</li>
                    </Link>

                    <Link to='/projects'>
                        <li>Projects</li>
                    </Link>

                    <Link to='/contact-me'>
                        <li>Contact</li>
                    </Link>
                    
                </ul>

            </nav>
        )
    }

}

export default Navigation