import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Gorakhpur",
        feelsLike: 37.24,
        humidity: 11,
        temp: 40.07,
        tempMax: 40.07,
        tempMin: 40.07,
        weather: "overcast clouds",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Harp</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>

    );
}