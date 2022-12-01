import React, { useEffect, useState } from 'react';
import './Screen1.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getcountryname, productList } from "../redux/productaction";

function Screen1() {
  const dispatch = useDispatch();
  const [inputfield, setinputfield] = useState("");
  const se = useSelector((state: any) => state.productData);
//  const cname = useSelector((state: any) => state.countrydata);
  let navigates = useNavigate();
  const [tr, settr] = useState(false);


  useEffect(() => {
    if (tr === true) {
      navigatepage();
    }
    settr(true);
  }, [se])


  const navigatepage = () => {
    navigates("/screen2")
  }


  const saveinputfield = (e: any) => {
    console.log(e.target.value);
    setinputfield(e.target.value);
    dispatch(getcountryname(inputfield));
  }


  function fetchdata() {
    //  console.log(data)
    dispatch(productList(inputfield));
    console.log("...", se);
  }


  return (
    <div className='maincomponent' style={{ 
      backgroundImage: `url("https://img.freepik.com/free-vector/gorgeous-clouds-background-with-blue-sky-design_1017-25501.jpg")` ,backgroundRepeat:'no-repeat',backgroundSize:"cover"
    }}>
      <div className='topblock'>
      <h1>Weather App</h1>
      </div>
      <div className='bottomblock'>
       <div>
      <input className='inputbox' type={"text"} placeholder={"Enter country name "} onChange={saveinputfield} value={inputfield} />
      </div>
      <div className='btn'>
      {inputfield === "" ? <button className='button' disabled>submit</button> : null}
      {inputfield !== "" ? <button className='button' onClick={() => { fetchdata() }}>submit</button> : null}
    </div>
    </div>
    </div>
  );
}

export default Screen1;
