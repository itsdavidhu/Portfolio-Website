import TypeWriter from 'typewriter-effect';
import logo from './images/logo-color.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './home.css';

function Home() {
    return(
    <div id="header">
        <div className="container">
            <nav>
                <a href="#header"><img src={logo} alt="logo" className="logo"/></a>
                <ul id="sidemenu">
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <FontAwesomeIcon icon="fa-solid fa-xmark" />
                </ul>
                <FontAwesomeIcon icon="fa-solid fa-bars" />
            </nav>
            <div className="header-txt">
                <h1>Hey! I'm David Hu.</h1>
                <h1>I'm a
                    <TypeWriter 
                    options={{
                        strings: ["Computer Scientist.", "Software Engineer.", "Developer.", "Student."],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </h1>
            </div>
        </div>
    </div>
    )
}

export default Home