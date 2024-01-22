import TypeWriter from 'typewriter-effect';
import logo from './images/logo-color.png';
import './home.css';
import { useState } from 'react';

function Home() {

    const [toggleState, setToggleState] = useState(false);
    const toggleTab = () => {
        setToggleState(toggleState => !toggleState);
    }

    let toggleBar = toggleState ? 'active' : 'inactive';

    return (
    <div id="header">
        <div className="container">
            <nav>
                <a href="#header"><img src={logo} alt="logo" className="logo"/></a>
                <ul id={toggleBar}>
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <i className="fa fa-xmark" onClick={toggleTab}></i>
                </ul>
                <i className="fa fa-bars" onClick={toggleTab}></i>
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