import React, { useState } from 'react';
import { useSelector } from "react-redux";
import './Screen2.css';

function Screen2() {
  const [temp, settemp] = useState("");
  const [img, setimg] = useState("");
  const [wind, setwind] = useState("");
  const [precip, setprecip] = useState("");
  const [show, setshow] = useState(false);
  const se = useSelector((state: any) => state.productData);
  const cname = useSelector((state: any) => state.countrydata);

  let value = 0;
  if (cname === "India") {
    value = 1;
  }

  console.log("from screen2 ", se);

  if (se.length !== 0) {
    console.log(se.data[0].capital[0]);
  }

  const fetchapi = () => {
    fetch(`http://api.weatherstack.com/current?access_key=9fca6f6531b4a5590750f1224d41f946&query=${se.data[value].capital}`).then((result) => {
      result.json().then((resp) => {
        // console.log(resp),
        //   console.log(resp.current.temperature),
        settemp(resp.current.temperature);
        setimg(resp.current.weather_icons[0]);
        setwind(resp.current.wind_speed);
        setprecip(resp.current.precip);
        setshow(true);
      })
    })
  }

  return (

    <div className='main' style={{ 
      backgroundImage: `url("https://img.freepik.com/free-vector/gorgeous-clouds-background-with-blue-sky-design_1017-25501.jpg")` ,backgroundRepeat:'no-repeat',backgroundSize:"cover"
    }}>
      {se.length === 0 ?
        <h1>loading</h1> : null}
      {se.length !== 0 ?

        <div className='middle'>
          <div className='common'>
            <h1 className='heading' >Capital :</h1>
            <h1 >{se.data[0].capital[0]}</h1>
          </div>
          <div className='common'>
            <h1 className='heading'>Population :</h1>
            <h1 >{se.data[value].population}</h1>
          </div>
          <div className='common'>
            <h1 className='heading' >Latitude :</h1>
            {(se.data[value].capitalInfo.latlng).map((a: number, b: number) => {
              if (b === 0) {
                return (
                  <h1 key={b} >{a} N</h1>
                )
              }
              if (b === 1) {
                return (
                  <h1 key={b} >{a} E</h1>
                )
              }
            })}
          </div>
          <div className='common'>
            <h1 className='heading'>Longitue :</h1>
            {(se.data[value].latlng).map((a: number, b: number) => {
              if (b === 0) {
                return (
                  <h1 key={b} >{a} S</h1>
                )
              }
              if (b === 1) {
                return (
                  <h1 key={b} >{a} W</h1>
                )
              }
            })}
          </div>
          <div className='common'>
            <h1 className='heading'>Flag :</h1>
            <div>
              <img src={se.data[value].flags.png} height={"100"} width="100" alt="flag image" />
            </div>
          </div>
          <button className='btnn' onClick={() => { fetchapi() }}> Capital-Weather</button>
        </div>
        : null}

      {show === true ?
        <div className='middle' >
          <div className='common'>
          <h1 className='heading'>Temperature :</h1>
          <h1 >{temp}°C°F</h1>
          </div>
          <div className='common'>
          <h1 className='heading'>Weaher icon :</h1>
          <img src={img} height={"100"} width="100" alt="flag-image" />
          </div>
          <div className='common'>
          <h1 className='heading'>Wind speed :-</h1>
          <h1 >{wind}</h1>
          </div>
          <div className='common'>
          <h1 className='heading'>Precipation :</h1>
          <h1 >{precip}</h1>
          </div>
        </div> : null}

    </div>
  );
}

export default Screen2;