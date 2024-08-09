import './App.css';
import { useState, useRef } from "react"
import WorldForecast from './WorldForecast/WorldForecast';
import Header from './Header/Header.js'
import CurrentWeather from './CurrentWeather/CurrentWeather.js';





const api = {
  key: `${process.env.REACT_APP_APPID}`,
  base: "http://api.openweathermap.org/data/2.5/"
}


function App() {
  const [search, setSearch] = useState("")
  const [weather, setWeather] = useState({})

  
  const weatherRef = useRef(null);
 
 
  const searchPressed = () => {
    console.log("Searching...");
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then((result) => {
        setWeather(result)
        // weatherRef.current.scrollIntoView({ behavior: 'smooth' })
        window.scrollBy({ top: 830, behavior: 'smooth' });
    })    
  };

  

 
 
  return (
    <div className="App">
      <Header />
      <div className="App-header">
        <div className="provide-title">
          <h1>Provide you a world wide weather forecast</h1>
          <p>The World's Most Accurate Forecaster. With <br></br>extreme weather on the rise. Its so easy to receive the weather conditions in your <br></br>current location.</p>
          </div>

        <div className="search-recent-container">
          <div className="search" ref={weatherRef}>
            
              <img className="search-icon" src={require("./icons/search.png")} alt="search"/>
              <input
                type="text"
                placeholder="Search place "
                onChange={(e) => setSearch(e.target.value)}
              />
                <button onClick={searchPressed}>Search</button>
            
          </div>
          <div className='recent'>
            <div className="recent-place">
              <p>Recent Place</p>
              <img src={require("./icons/arrow.png")} alt="arrow"/>
            </div>
            <div className="places-container">
              <div className="place">
                <p>New York</p>
                <h2>24 °C</h2>
                <p>Raining</p>
              </div>
              <div className="place">
                <p>Barcelona</p>
                <h2>30 °C</h2>
                <p>Raining</p>
              </div>
              <div className="place">
                <p>Paris</p>
                <h2>28 °C</h2>
                <p>Raining</p>
              </div>
            </div>
            </div>
          </div>


          
        {typeof weather.main !== "undefined" ? (
          
          <div>
            <CurrentWeather value={weather}/>
          </div>
        
        ) : (
          ""
        )}
        <WorldForecast />
      </div>
     
    </div>
  );
}

export default App;
