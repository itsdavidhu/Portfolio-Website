import poke from './images/PokeCardtel.png';
import loldata from './images/lol-data.png';
import stocks from './images/stock-the-past.jpg';
import './portfolio.css';

function Portfolio() {
    return (
    <div id="portfolio">
        <div className="container">
            <h1 className="sub-title">Projects</h1>
            <div className="project-list">
                <div className="project">
                    <img src={loldata} alt="loldata"/>
                    <div className="layer">
                        <h3>LolData</h3>
                        <p>League of Legends Data and Statistical Analysis for Solo Queue</p>
                        <a href="https://github.com/itsdavidhu/Lol-data"><i className="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div className="project">
                    <img src={poke} alt="poke"/>
                    <div className="layer">
                        <h3>PokeCardtel</h3>
                        <p>Pokemon PSA grading app for DeerHacks.</p>
                        <a href="https://github.com/itsdavidhu/Deerhacks-2024_Poke_Cardtel"><i className="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div className="project">
                    <img src={stocks} alt="stocks"/>
                    <div className="layer">
                        <h3>StockThePast</h3>
                        <p>Stock market simulator for learning about
                        and practicing stock market trading.</p>
                        <a href="https://github.com/itsdavidhu/StockThePast"><i className="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </div>
            <a href="https://github.com/itsdavidhu" className="btn">See more</a>
        </div>
    </div>
    );
}

export default Portfolio