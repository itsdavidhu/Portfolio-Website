import chatbot from './images/shopify-chatbot.png';
import receipt from './images/img_receipt-scanning-app.jpg';
import stocks from './images/stock-the-past.jpg';
import './portfolio.css';

function Portfolio() {
    return (
    <div id="portfolio">
        <div className="container">
            <h1 className="sub-title">Projects</h1>
            <div className="project-list">
                <div className="project">
                    <img src={chatbot} alt="chatbot"/>
                    <div className="layer">
                        <h3>Shopify Chatbot</h3>
                        <p>Shopify integrated customer service chatbot that provides order 
                        tracking using Python Webhooks and answers FAQ. Created with IBM Cloud.</p>
                        <a href="https://shopidollookbook.com/"><i className="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div className="project">
                    <img src={receipt} alt="receipt-scan"/>
                    <div className="layer">
                        <h3>Reciept Scanner</h3>
                        <p>Reciept scanner that extracts relevant information and 
                        organizes the data for easy access and management.</p>
                    </div>
                </div>
                <div className="project">
                    <img src={stocks} alt="stocks"/>
                    <div className="layer">
                        <h3>StockThePast</h3>
                        <p>Stock market simulator that allows users to learn about
                        and practice stock market trading.</p>
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