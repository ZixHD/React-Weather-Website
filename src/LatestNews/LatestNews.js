import "./LatestNews.css"

export default function LatestNews() {
    return (
        <div className="latest-news">
            <div className='heading'>
                <h1>Latest News</h1>
                <div className='see-more'>
                    <p>See More</p>
                    <img src={require('../icons/arrow.png')} alt="arrow"/>
                </div>
            </div>
            <div className="news-container">
                <div className="news-item">
                    <img src={require("../icons/news1.png")} alt="news1" />
                    <p className="date">April 26</p>
                    <p className="title">Tommorow Weather Update</p>
                    <p>Latest Temperatures to hit high teens as warm and sunny weather forecast. Sunny spells will dominate across the...</p>
                </div>
                <div className="news-item">
                    <img src={require("../icons/news2.png")} alt="news2" />
                    <p className="date">April 26</p>
                    <p className="title">Snow and cool weather continues</p>
                    <p>Active and cool weather continues for the northern Alaska this week as several storm systems move through.</p>
                </div>
                <div className="news-item">
                    <img src={require("../icons/news3.png")} alt="news3" />
                    <p className="date">April 26</p>
                    <p className="title">Weather Forecast as Clouds Set In</p>
                    <p>The weather forecast for today is partly cloudy to cloudy at times with chance of rain convective clouds formation.</p>
                </div>
            </div>
        </div>
    )
}