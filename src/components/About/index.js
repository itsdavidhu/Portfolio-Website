import about from './images/about.png';
import './about.css';
import { useState } from 'react';

function About() {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
    <div id="about">
        <div className="container">
            <div className="row">
                <div className="about-col-1">
                    <img src={about} alt="about"/>
                </div>
                <div className="about-col-2">
                    <h1 className="sub-title">About Me</h1>
                    <p>Hi! I am a third year student at the University of Toronto specializing in 
                    computer science and minoring in mathematics. My primary academic interests are 
                    software engineering, artificial intelligence, and machine learning. In my free 
                    time, I play basketball for the UTM Tri-Campus team, lift weights, and play the 
                    guitar.</p>

                    <div className="tab-titles">
                        <p className={toggleState === 1 ? "tab-links active-link" : "tab-links"} onClick={() => toggleTab(1)}>Skills</p>
                        <p className={toggleState === 2 ? "tab-links active-link" : "tab-links"} onClick={() => toggleTab(2)}>Experience</p>
                        <p className={toggleState === 3 ? "tab-links active-link" : "tab-links"} onClick={() => toggleTab(3)}>Education</p>
                    </div>
                    <div className={toggleState === 1 ? "tab-contents active-tab" : "tab-contents"} id="skills">
                        <ul>
                            <li><span>Languages</span><br/>Python, Java, C, JavaScript, HTML/CSS, SQL, Bash, Assembly, and Swift</li>
                            <li><span>Frameworks/Technologies</span><br/>Git, React, TensorFlow, Microsoft Azure, IBM Cloud, JavaFX, Swift UI, and Pygame</li>
                        </ul>
                    </div>
                    <div className={toggleState === 2 ? "tab-contents active-tab" : "tab-contents"} id="experience">
                        <ul>
                            <li><span>Jan 2024 - Present</span><br/>M2M Tech - Machine Learning Intern</li>
                            <li><span>May 2022 - Sep 2022</span><br/>York University - Data Entry Specialist</li>
                            <li><span>Jul 2022 - Aug 2022</span><br/>Three-Flavors Kids' Club - Python Instructor</li>
                        </ul>
                    </div>
                    <div className={toggleState === 3 ? "tab-contents active-tab" : "tab-contents"} id="education">
                        <ul>
                            <li><span>2021 - 2025</span><br/>University of Toronto - Computer Science Specialist, Mathematics Minor</li>
                            <li><span>2017 - 2021</span><br/>Vaughan Secondary School</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default About