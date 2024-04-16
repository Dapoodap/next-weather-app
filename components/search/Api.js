export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "382a675060mshb8a1ed6e926e078p138e14jsn312492fbda8d",// enter your rapid api key here
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

// export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
// export const WEATHER_API_KEY = ""; // enter your key from openweather API


// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
//   headers: {
//     'X-RapidAPI-Key': '382a675060mshb8a1ed6e926e078p138e14jsn312492fbda8d',
//     'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }