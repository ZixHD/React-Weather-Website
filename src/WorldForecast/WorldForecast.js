import './WorldForecast.css'
import LatestNews from '../LatestNews/LatestNews'




export default function WorldForecast() {
    return (
        <div>
            <div className="world-forecast">
                <h2>World Forecast</h2>
                <div className="table-country">
                    <ul className="column1">
                        <li><div className="table-item"><img className = "image" src = {require('../w40/au.png')} alt="au"/><p>AUS</p><p>AUSTRALIA</p><img src={require('../icons/arrow.png')} alt="arrow"/></div></li>
                        <li><div className="table-item"><img className = "image" src = {require('../w40/se.png')} alt="se"/><p>SWE</p><p>SWEDEN</p><img src={require('../icons/arrow.png')} alt="arrow"/></div></li>
                        <li><div className="table-item"><img className = "image" src = {require('../w40/nl.png')} alt="nl"/><p>NLD</p><p>NETHERLANDS</p><img src={require('../icons/arrow.png')} alt="arrow"/></div></li>
                        <li><div className="table-item"><img className = "image" src = {require('../w40/gb.png')} alt="gb"/><p>GBR</p><p>UNITED KINGDOM</p><img src={require('../icons/arrow.png')} alt="arrow"/></div></li>
                    </ul>
                    <ul className="column2"> 
                        <li><div className="table-item"><img className = "image" src = {require('../w40/id.png')} alt="id"/><p>IDN</p><p>INDONESIA</p><img src={require('../icons/arrow.png')} alt="arrow"/></div></li>
                        <li><div className="table-item"><img className = "image" src = {require('../w40/jp.png')} alt="jp"/><p>JPN</p><p>JAPAN</p><img src={require('../icons/arrow.png')} alt="arrow"/></div></li>
                        <li><div className="table-item"><img className = "image" src = {require('../w40/ca.png')} alt="ca"/><p>CAN</p><p>CANADA</p><img src={require('../icons/arrow.png')} alt="arrow"/></div></li>
                        <li><div className="table-item"><img className = "image" src = {require('../w40/us.png')} alt="us"/><p>USA</p><p>UNITED STATES </p><img src={require('../icons/arrow.png')} alt="arrow"/></div></li>
                    </ul>
                </div>
                <button className='button' onClick="">Explore All Locations</button>
                <WeatherMap /> 
            </div>
            <LatestNews />
        </div>
    )
}

function WeatherMap() {
    return (
        <div>
            <div className='weather_map'>
                <h2>Weather Map</h2>
                <img className="map-image" src={require('../icons/weather_map.png')} alt="weather map" />
                <button className='button-map' onClick="">Explore All Locations</button>
            </div>
        </div>
    )
}
