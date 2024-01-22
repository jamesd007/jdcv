import React, { useEffect, useState } from 'react';
import '../styles/GetCurrentLoc.css'

const WeatherComponent = () => {
 const [closestCity, setClosestCity] = useState('');
 const [cityId, setCityId] = useState(null);
 const [lat, setLat] = useState(null);
 const [lon, setLon] = useState(null);
 const [status, setStatus] = useState(null);
 const [temp, setTemp] = useState('');
 const [humidity, setHumidity] = useState('');
 const [description, setDescription] = useState('');
 const [icon, setIcon] = useState('');
 const[forecastArray,setForecastArray]=useState([])
 const API_KEY = process.env.REACT_APP_API_KEY
 const [done,setDone]=useState(false)
 const [fArr,setFArr] = useState([]);
//  const REACT_APP_MAPBOX_API = process.env.REACT_APP_MAPBOX_API

const successCallback = (position) => {
  setLon(position.coords.longitude);
  setLat(position.coords.latitude)
 };

 const errorCallback = (status) => {
  setStatus('Geolocation API error')
 };
 const geolocationAPI = navigator.geolocation;

 if (!geolocationAPI)
  setStatus('Geolocation API is not available in your browser!')

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

 useEffect(() => {
  if (lat && lon && !done){
    setDone(true)
  const fetchLocationData = async () => {
   try {
    const locationResponse = await fetch(
     `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=1&units=metric&appid=${API_KEY}`
    );

    if (!locationResponse.ok) {
     throw new Error(`HTTP error! Status: ${locationResponse.status}`);
    }

    const locationData = await locationResponse.json();

    if (locationData.list && locationData.list.length > 0) {
      const cityInfo = locationData.list[0];
      setClosestCity(cityInfo.name);
      setCityId(cityInfo.id);
      setLat(cityInfo.coord.lat);
      setLon(cityInfo.coord.lon);
      setTemp(cityInfo.main.temp);
      setHumidity(cityInfo.main.humidity);
      setDescription(cityInfo.weather[0].description);
      setIcon(cityInfo.weather[0].icon);
    } else {
      console.error("Invalid response format from OpenWeatherMap API");
    }
   } catch (err) {
     console.error("Error fetching location data:", err.message);
   }
  };

  fetchLocationData();
  }
 }, [API_KEY, lon, lat, done]);

 useEffect(() => {
  // Update the weather icon whenever the description changes
  let locationIcon = document.querySelector('.weather-icon');
  if (locationIcon) {
    locationIcon.innerHTML = `<img src="./icons/${icon}.png">`;
  }
}, [description, icon]);

//  Use the city ID or coordinates for the 7-day forecast request
 useEffect(() => {
  const fetchForecastData = async () => {
   try {
    const forecastResponse = await fetch(
     `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${API_KEY}`
    );

    if (!forecastResponse.ok) {
     throw new Error(`HTTP error! Status: ${forecastResponse.status}`);
    }

    const forecastData = await forecastResponse.json();
    
    let tempArr=forecastData.list.map((item)=>{
      return{"dateTime":item.dt,
      "maxTemp":item.main.temp_max,
      "minTemp":item.main.temp_min,
      "description":item.weather[0].description,
      "icon":item.weather[0].icon,
      "descriptionMain":item.weather[0].main}
    })
    setForecastArray(tempArr)
    
    // Handle the 7-day forecast data as needed
   } catch (err) {
    console.error("Error fetching forecast data:", err.message);
   }
  };

  if (cityId) {
   fetchForecastData();
  }
 }, [cityId, API_KEY]);

// Combine date and time strings into a single string
const checkDatePlace=(chkDate2,chkTime2)=>{
  const combinedDateTimeString = `${chkDate2} ${chkTime2}`;  
  const combinedDateTime = new Date(combinedDateTimeString);
  const startTime = new Date(combinedDateTime);
  startTime.setHours(7, 0, 0, 0); // Set to 11:00:00
  const endTime = new Date(combinedDateTime);
  endTime.setHours(10, 0, 0, 0); // Set to 13:00:00
  if (combinedDateTime > startTime && combinedDateTime < endTime) {
    return true //The time is between 07:00 and 10:00
  } else { 
    return false  //The time is not between 07:00 and 10:00
  }  
}

 useEffect(()=>{
  if (forecastArray && forecastArray.length>0){
    let tempFArr=forecastArray[0]
   //conv date
    let timestamp = Number(tempFArr.dateTime)
    let dateAndTime = new Date(timestamp * 1000);
    // let chkdate = new Intl.DateTimeFormat("en-US", {
    //   year: "numeric",
    //   month: "2-digit",
    //   day: "2-digit",
    // }).format(dateAndTime); // 01/11/2021
  //  let chkDate2
  //  let chkTime2
   //init vals
    let currDate = null
    let currTime =null
    let currMaxTemp = null
    let currMinTemp = null
    let currDescription = null
    let currIcon = null
    let currDescriptionMain = null
    let tempDateResult={}
    let tempFArr1=[]
    forecastArray.forEach((item) => {
    let timeStamp2 = Number(item.dateTime);
    let dateAndTime = new Date(timeStamp2 * 1000);
    let chkDate2 = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(dateAndTime);
    let chkTime2 = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Use 24-hour format
  }).format(dateAndTime);

  if (currDate === null) {
    currDate = chkDate2;
    currTime = chkTime2;
    if (temp>item.maxTemp) currMaxTemp = temp; else currMaxTemp=item.maxTemp;
    currMinTemp = item.minTemp;
    currDescription = item.description;
    currIcon = item.icon;
    currDescriptionMain = item.descriptionMain;
  } else if (chkDate2 === currDate) {
    if (item.maxTemp > currMaxTemp) currMaxTemp = item.maxTemp;
    if (item.minTemp < currMinTemp) currMinTemp = item.minTemp;
    if (checkDatePlace(chkDate2,chkTime2)) {currIcon=item.icon;currDescription=item.description}
  } else if (chkDate2 > currDate) {
    tempFArr1.push({
      "dateTime": currDate,
      "maxTemp": currMaxTemp,
      "minTemp": currMinTemp,
      "description": currDescription,
      "icon": currIcon,
      "descriptionMain": currDescriptionMain,
    });
      currDate = chkDate2;
      currMaxTemp = item.maxTemp;
      currMinTemp = item.minTemp;
      currDescription = item.description;
      currIcon = item.icon;
      currDescriptionMain = item.descriptionMain;
    }
  });
  setFArr(tempFArr1)
  } 
  },[forecastArray])

const formatData=(data)=>{
  const dateObject = new Date(data.dateTime);    
  const dateOptions = {
    day: '2-digit', // 18
    month: 'short', // Jan
  };
  const dayOptions = {
    weekday: 'short', // Thu
  };
  return (
    <div
      style={{display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize:"0.8rem",
        justifyContent:"center"
      }}>
      <p>{dateObject.toLocaleDateString('en-US', dateOptions)}</p>
      <p>{dateObject.toLocaleDateString('en-US', dayOptions)}</p>
      <div 
        style={{display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          fontSize: '0.8rem',
          width:"4rem",
          height:"2rem",
        }}>
        <span 
        >{data.maxTemp.toFixed(1)}°C</span>
        <span 
        >{data.minTemp.toFixed(1)}°C</span>
      </div>
      <img 
        style={{width:"30px",height:"auto"}}
        src={require(`./icons/${data.icon}.png`)}
        alt="Icon" />
      <p style={{textAlign:"center"}}>{data.description}</p>
    </div>
  );
};

 return (
  <div>
    <h3>Current Weather in {closestCity}</h3>
    <p>Temperature: {temp}°C</p>
    <p>Humidity: {humidity}%</p>
    <div
      style={{
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
      }}>
      <span>{description}</span>
      {icon &&
        <span> 
          <img 
            style={{width:"30px",height:"auto"}}
            src={require(`./icons/${icon}.png`)}
            alt="Weather Icon" />
        </span>
        } 
    </div>
    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(5,1fr)"
      }}>
    {fArr.map((item) => (
      <div key={item.dateTime}>
        {formatData(item)}
      </div>
    ))}
    </div>
  </div>
 );
};

export default WeatherComponent;
