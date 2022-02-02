import React from 'react';
import './weather.css'
import { useState, useEffect } from 'react';
import Clear from '../assets/sunny.jpg'
import Cloudy from '../assets/cloud.jpg'
import Rainy from '../assets/rainy.jpg'
import Snow from '../assets/snow3.jpg'
import Overcast from '../assets/overcast.jpg'
import Particles from 'react-particles-js';
import * as IoIcons from "react-icons/io";


function Weather() {
    const [place, setPlace] = useState('Manila')
    const [placeInfo, setPlaceInfo] = useState({})

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = () => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=fa71ffd5fc494ed097531809221701&q=${place}&days=1&aqi=no&alerts=no`)
        .then(response => response.json())
        .then(data => setPlaceInfo({
            name: data.location.name,
            region: data.location.region,
            country: data.location.country,
            celsius: {
                current: data.current.temp_c,
                high: data.forecast.forecastday[0].day.maxtemp_c,
                low: data.forecast.forecastday[0].day.mintemp_c,
            },
            condition: data.current.condition.text
        }));
    }
    console.log(placeInfo);

    return (
        <div className='Weather' 
        style={
                placeInfo.condition?.toLowerCase() === "clear" || 
                placeInfo.condition?.toLowerCase() === "sunny"
                ? { backgroundImage: `url(${Clear})` } 
                : placeInfo.condition?.includes('cloudy') 
                ? { backgroundImage: `url(${Cloudy})` } 
                : placeInfo.condition?.toLowerCase().includes('rainy') 
                ? { backgroundImage: `url(${Rainy})` } 
                : placeInfo.condition?.toLowerCase().includes('snow') 
                ? { backgroundImage: `url(${Snow})` } 
                : { backgroundImage: `url(${Overcast})` }
            }
            >
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
	            }} />
                
                <div className="row">
                    <div className='col-md-6'>
                        <div className='weather-container'>
                            <div className='top-part'>
                                    <h1 className='current-celsius'>{placeInfo.celsius?.current}°C</h1>
                                <div className='condition-high-low'>
                                    <h1 className='condition'>{placeInfo.condition}</h1>
                                    <h1>{placeInfo.celsius?.high}°C</h1>
                                    <h1>{placeInfo.celsius?.low}°C</h1>
                                </div>
                            </div>
                            <h2>{placeInfo.name}, {placeInfo.country}</h2>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='container'>
                            <div className='search-input'>
                                <input className='' type="text" value={place} onChange={(e) => setPlace(e.target.value)}/>
                                <span className='search-button' onClick={handleFetch}><IoIcons.IoIosSearch /></span>
                            </div>
                        </div>
                    </div>
                </div>
                
             
        </div>
    )
}

export default Weather
