import "../CurrentWeather/CurrentWeather.css"
import { useState, useEffect } from 'react'

const api = {
    key: `${process.env.REACT_APP_APPID}`,
    base: "http://api.openweathermap.org/data/2.5/"
}


export default function CurrentWeather(props) {
    
    
    
   

    return (
        <div className="current-weather">
            <CurrentData value={props.value} />
            <TodaysWeather value={props.value} />
        </div>
    );
}

function CurrentData(props){
    const imageUrl = "http://openweathermap.org/img/w/";
    let date = getFormattedDate()
    let data = props.value;
   
    return(
        <div className="main-container">
            <div className="data-container">
                <div className="data">
                    <div className="upper">
                        <p>Now</p>
                        <div className="temp">
                            <h1>{data.main.temp + "°C"}  </h1>
                            <img src = {imageUrl + data.weather[0].icon + ".png"} alt="current-weather" />
                        </div>
                        <p>{data.weather[0].main}</p>
                    </div>
                    <div className="date">
                        <img src={require("../icons/calendar.png")} alt="calendar"/>
                        <p>{date}</p>
                    </div>
                    <div className="location">
                    <img src={require("../icons/location.png")} alt="location"/>
                        <p>{data.name + ", " + data.sys.country}</p>
                    </div>
                </div>
            </div>
            <Forecast value={data}/>
        </div>
    )
}

function Forecast(props){

    
    
    const [forecast, setForecast] = useState({})
   
    const imageUrl = "http://openweathermap.org/img/w/";
      
    let data = props.value;
     
    
      useEffect(() => {
        fetch(`${api.base}forecast?id=${data.id}&APPID=${api.key}`)
            .then(res => res.json())
            .then((result) => {
                setForecast(result);
            });
        
    }, [data.id]);
      
    
    const toCelsius = (temp) => ((temp - 273.15).toFixed(1))
    const getDayOfWeek = (dt_txt) => {
        const date = new Date(dt_txt.replace(' ', 'T'));
        return date.toLocaleDateString('en-US', { weekday: 'short' });
    };

    return(
        <div className="forecast-container">
            <div className="forecast-data">
                <h1>5 days Forecast</h1>
                <div className="forecast-column">
                    
                       
                    {forecast &&  forecast.list && forecast.list.map((item, index) => (
                        index % 8 === 0 && (
                            <div className="forecast-item" key={index}>
                                <img src={imageUrl + item.weather[0].icon + ".png"} alt="forecast" />
                                <p>{toCelsius(item.main.temp)}°C</p>
                                <p>{formatDate(item.dt_txt)}</p>
                                <p>{getDayOfWeek(item.dt_txt)}</p>  
                            </div>
                        )
                    ))}
                </div>
            </div>
    </div>
    )
}

function TodaysWeather(props){

    const data = props.value;
    const [aqi, setAqi] = useState({})

    const aqiDescriptionMap = {
        1: "Good",
        2: "Fair",
        3: "Medium",
        4: "Poor",
        5: "Very Poor"
    };
    

    useEffect(() => {
        fetch(`${api.base}air_pollution?lat=${data.coord.lat}&lon=${data.coord.lon}&APPID=${api.key}`)
            .then(res => res.json())
            .then((result) => {
                setAqi(result);
            });
        
    }, [data.coord.lat, data.coord.lon]);

    if (aqi.list !== undefined) {
        console.log(aqi.list[0])
    }
    console.log(data)
    
    

    return(
        <div className="right">
            <h1>Today's highlights</h1>
            <div className="right-container">
                <div className="wind-container">
                    {aqi && aqi.list && aqi.list[0] && (
                        <div>
                            <div className="wind-items0">
                                <p>Air Quality Index</p>
                                <div className="aqi-container">
                                    <p className="aqi-index">{getAqiDescription(aqiDescriptionMap, aqi.list[0].main.aqi)}</p>
                                </div>
                            </div>
                             <div className="wind-data">
                                <div className="wind-items1">
                                    <img className="wind-icon" src={require("../icons/wind.png")} alt="wind" />
                                    <div className="item-container">
                                        <p>CO</p>
                                        <p className="values">{aqi.list[0].components.co}</p>
                                    </div>
                                    <div className="item-container">
                                        <p>O3</p>
                                        <p className="values">{aqi.list[0].components.o3}</p>
                                    </div>
                                </div>
                                <div className="wind-items2">
                                    <div >
                                        <p>PM2.5</p>
                                        <p className="values">{aqi.list[0].components.pm2_5}</p>
                                    </div>
                                    <div className="item-container">
                                        <p>NO</p>
                                        <p className="values">{aqi.list[0].components.no}</p>
                                    </div>
                    
                                </div>
                                <div className="wind-items3">
                                    <div >
                                        <p>PM10</p>
                                        <p className="values">{aqi.list[0].components.pm10}</p>
                                    </div>
                                    <div className="item-container">
                                        <p>NO2</p>
                                        <p className="values">{aqi.list[0].components.no2}</p>
                                    </div>
                                </div>
                                <div className="wind-items4">
                                    <div>
                                        <p>SO2</p>
                                        <p className="values">{aqi.list[0].components.so2}</p>
                                    </div>
                                    <div>
                                        <p>NH3</p>
                                        <p className="values">{aqi.list[0].components.nh3}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                     )}
                </div>
                <div className="sun-container">
                    <div className="sun-data">
                        <div className="sun-header">
                            <p>Sunrise & Sunset</p>
                        </div>
                        <div className="sun-row">
                            <img src={require("../icons/sunrise.png")} alt="sunrise"/>
                            <p>{formatTime(data.sys.sunrise)}</p>
                            <img src={require("../icons/sunset.png")} alt="sunrise"/>
                              <p>{formatTime(data.sys.sunset)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-containers">
                <div className="bottom-right-container0">
                    <div className="humid-feel-container">
                        <div className="parameter-data">
                            <div className="parameter-header">
                                <p>Humidity</p>
                            </div>
                            <div className="parameter-row">
                                <img src={require("../icons/humidity.png")} alt="humidity" />
                                <p className="temp-p">{data.main.humidity + "%"}</p>
                            </div>
                        </div>
                        <div className="parameter-data">
                            <div className="parameter-header">
                                <p>Feels Like</p>
                            </div>
                            <div className="parameter-row">
                                <img src={require("../icons/temperature.png")} alt="feels-like" />
                                <p className="temp-p">{data.main.feels_like + "°C"}</p>
                            </div>
                        </div>
                    </div>
                    <div className="pressure-container">
                        <div className="parameter-data-single">
                            <div className="parameter-header">
                                <p>Pressure</p>
                            </div>
                            <div className="parameter-row">
                                <img src={require("../icons/pressure.png")} alt="pressure" />
                                <p className="temp-p">{data.main.pressure + "hPa"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-right-container1">
                    <div className="pressure-container">
                        <div className="parameter-data-single">
                            <div className="parameter-header">
                                <p>Visibility</p>
                            </div>
                            <div className="parameter-row">
                                <img src={require("../icons/visibility.png")} alt="pressure" />
                                <p className="temp-p">{data.visibility / 1000 + "km"}</p>
                            </div>
                        </div>
                    </div>
                    <div className="pressure-container">
                        <div className="parameter-data-single">
                            <div className="parameter-header">
                                <p>Wind Speed</p>
                            </div>
                            <div className="parameter-row">
                                <img src={require("../icons/wind.png")} alt="pressure" />
                                <p className="temp-p">{data.wind.speed + "m/s"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        
    )
}

function getFormattedDate() {
    const today = new Date();
    const options = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
    };
    return today.toLocaleDateString('en-US', options);
}

function formatDate(dt_txt) {
    const date = new Date(dt_txt.replace(' ', 'T'));
    const options = { day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
}

function formatTime(time) {
    const date = new Date(time * 1000);
    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    hours = hours.toString().padStart(2, '0');
    return `${hours}:${minutes} ${ampm} `;
}

function getAqiDescription(map, aqiLevel) {
    return map[aqiLevel] || "Unknown AQI Level";
}
