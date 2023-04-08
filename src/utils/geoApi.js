export const geolocationOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e09d3430edmsh247ed0536ef0895p18c22fjsn8a5d1ef84f6b",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const geolocationUrl =
  "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000";
// fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// const [location, setLocation] = useState("");
// const [cities, setCities] = useState({});

// const forecastUrl = `http://api.weatherapi.com/v1/forecast.json?key=142e5541d3fe4aedb0d172356230404&q=${location}&days=7&aqi=no&alerts=no`;

// const fetchLocation = async (city) => {
//   console.log(city);
//   const response = await fetch(
//     `${geolocationUrl}&namePrefix=${city}`,
//     geolocationOptions
//   );
//   const data = await response.json();

//   setCities(data);
// };

// console.log(cities);
// const handeleSearchChange = (e) => {
//   fetchLocation(e.target.value);
// };

// const debounceOnChange = debounce(handeleSearchChange, 2000);
