"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import humidity from '../../public/asset/humidity.png';
import uv from '../../public/asset/uv.png';
import vision from '../../public/asset/vision.png';
import wind from '../../public/asset/wind.png';

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [weather, setWeather] = useState();
  const [forecasr, setForecast] = useState();

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear().toString().substr(-2);
    const dayOfWeek = date.toLocaleString("en-US", { weekday: "long" });

    return `${hours}:${minutes} - ${dayOfWeek}, ${day} ${month} '${year}`;
  };

  const handleWeather = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?q=${value}&days=3&key=b85a0e7583284eb8a7661607243003`
      );
      setWeather(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
    setValue("");
  };

  return (
    <>
      <div className="w-1/2 m-auto">
        <form
          className="flex items-center p-1 rounded-sm"
          onSubmit={handleWeather}
        >
          <input
            className="flex-1 px-2 py-1 mx-1 text-gray-900 bg-white rounded-2xl focus:outline-none focus:ring "
            id="username"
            type="text"
            placeholder="Enter Your City"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            type="submit"
            className="p-2 bg-white rounded-2xl hover:bg-blue-700 focus:outline-none focus:ring"
          >
            <BiSearch className="text-gray-900" />
          </button>
        </form>
      </div>

      {weather ?
    <>
    <div className='container flex items-center justify-center space-x-6 mt-14' >
      <h1 className='text-5xl font-semibold text-white'>{weather.current.feelslike_c}°C</h1>
      <div className='text-center ' >
        <h3 className='text-2xl font-semibold tracking-wide text-white'>{weather.location.name}, {weather.location.country}</h3>
        <p style={{ fontSize:'10px',color:'white'}}>{formatDateTime(weather.current.last_updated)}</p>
      </div>
      <div className='flex flex-col items-center p-2'>
      <Image
      src={`https:${weather.current.condition.icon}`}
      width={80}
      height={80}
      alt="Picture of the weather"
    />
    <p style={{ fontSize:'12px',color:'white',textAlign:'center'}}>{weather.current.condition.text}</p>
      </div>
    </div>
    <div
          className="w-1/2 p-4 m-auto mt-5 border border-white rounded-lg"
          style={{
            background: "rgba(255, 255, 255, 0.25)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.18)",
          }}
        >
          <p className="mb-4 text-center" style={{ fontSize:'14px' }}>Weather details...</p>
          <div className="">
          <div className="flex justify-between mb-2">
              <p style={{ fontSize:'12px' }}>Humidity</p>
              <div className="flex justify-between gap-2">
              <p style={{ fontSize:'12px' }}>{weather.current.humidity}%</p>
              <Image
                src={humidity}
                width={15}
                height={15}
                alt="Picture of the weather"
              />
              </div>
            </div>
            <div className="flex justify-between mb-2">
              <p style={{ fontSize:'12px' }}>UV Light</p>
              <div className="flex justify-between gap-2">
              <p style={{ fontSize:'12px' }}>{weather.current.uv}%</p>
              <Image
                src={uv}
                width={16}
                height={16}
                alt="Picture of the weather"
              />
              </div>
            </div>
          </div>
          <hr className="my-3" />
          <div className="">
          <div className="flex justify-between mb-2">
              <p style={{ fontSize:'12px' }}>Vision</p>
              <div className="flex justify-between gap-2">
              <p style={{ fontSize:'12px' }}>{weather.current.vis_km} KM</p>
              <Image
                src={vision}
                width={15}
                height={15}
                alt="Picture of the weather"
              />
              </div>
            </div>
            <div className="flex justify-between mb-2">
              <p style={{ fontSize:'12px' }}>Wind</p>
              <div className="flex justify-between gap-2">
              <p style={{ fontSize:'12px' }}>{weather.current.wind_mph} mph</p>
              <Image
                src={wind}
                width={15}
                height={15}
                alt="Picture of the weather"
              />
              </div>
            </div>
            
          </div>
    </div>

    </>
    :<></>}
    </>
  );
};

export default SearchBar;
