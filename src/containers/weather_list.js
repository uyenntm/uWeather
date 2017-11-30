import React, { Component } from 'react'
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

const temp_unit ="F";
const press_unit = "hPa";
const hum_unit ="%";
 class WeatherList extends Component {
    renderWeather(cityData){
        if(cityData == null){
            return (<div>City is not found</div>);
        }
        console.log("cityData",cityData);
        const name = cityData.city.name;
        
        console.log("name: ",name);
        const temps = cityData.list.map(weather => (weather.main.temp) * (9/5) - 459.67);
        const presures = cityData.list.map(weather => weather.main.pressure);
        const humiditys = cityData.list.map(weather => weather.main.humidity);
        const {lat,lon} = cityData.city.coord;
        
        
        return (
            <tr className="text-left" key={name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td>
                    <Chart data={temps} color="blue" unit={temp_unit}/>
                </td>
                <td>
                <Chart data={presures} color="green" unit={press_unit}/>
                </td>
                <td>
                <Chart data={humiditys} color="grey" unit={hum_unit}/>
                </td>
            </tr>
        );
    };
    render() {
        console.log("this.props:",this.props.weather);
        
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature ({temp_unit})</th>
                    <th>Pressure ({press_unit})</th>
                    <th>Humidity ({hum_unit})</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)} 

                </tbody>
            </table>
            
        )
    }
}
function mapSateToProps({weather}){
    return {weather};
}

export default connect(mapSateToProps)(WeatherList);

