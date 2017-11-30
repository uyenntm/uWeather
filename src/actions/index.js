import axios from 'axios';

const API_KEY = '30ef8f6b7adf0665b4e6a05ee830ad5e';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//http://api.openweathermap.org/data/2.5/forecast?appid=
//http://api.openweathermap.org/data/2.5/weather?appid=
export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city){
    const url = `${URL}&q=${city},us`;
    const request = axios.get(url);
    console.log("Request:", request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}