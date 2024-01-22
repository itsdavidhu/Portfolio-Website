import about from './images/about.png';
import './about.css';

function About() {
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
                        <p className="tab-links active-link" onClick="opentab('skills')">Skills</p>
                        <p className="tab-links" onClick="opentab('experience')">Experience</p>
                        <p className="tab-links" onClick="opentab('education')">Education</p>
                    </div>
                    <div className="tab-contents active-tab" id="skills">
                        <ul>
                            <li><span>Languages</span><br/>Python, Java, C, JavaScript, HTML/CSS, Bash, Assembly, and Swift</li>
                            <li><span>Frameworks/Technologies</span><br/>Git, IBM Cloud, JavaFX, Swift UI, and Pygame</li>
                        </ul>
                    </div>
                    <div className="tab-contents" id="experience">
                        <ul>
                            <li><span>May 2022 - Sep 2022</span><br/>York University - Telephone Inteviewer</li>
                            <li><span>Jul 2022 - Aug 2022</span><br/>Three-Flavors Kids' Club - Computer Camp Instructor</li>
                        </ul>
                    </div>
                    <div className="tab-contents" id="education">
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