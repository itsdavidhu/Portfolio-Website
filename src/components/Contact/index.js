import resume from './images/David_s_Resume.pdf';
import './contact.css'

function Contact() {
    return (
    <div id="contact">
        <div className="container">
            <div className="row">
                <div className="contact-left">
                    <h1 className="sub-title">Contact Me</h1>
                    <p><i className="fa-solid fa-envelope"></i>hu.david.dh@gmail.com</p>
                    <p><i className="fa-solid fa-phone"></i>(647)-535-2937</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/davidhu8/"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/itsdavidhu"><i className="fa-brands fa-github"></i></a>
                    </div>
                    <a href={resume} className="btn btn2">Download CV</a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Contact