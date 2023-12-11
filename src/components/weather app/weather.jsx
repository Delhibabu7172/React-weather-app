import axios from 'axios'
import React, { useState } from 'react'

const Weather = () => {

let [search,setsearch]=useState("")
let [weatherdata,setWeatherData]=useState({})
let [error,seterror]=useState(false)

let apidata=async (e)=>{
 try{
  e.preventDefault();
  const maindata=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=020ac31ecf3b82c081d818fd371fc20e`)
setWeatherData(maindata.data)
  console.log(maindata.data)
  setsearch("")
seterror(false)
 }
 catch(err)
 {
  seterror("city not found")
 }
}


let updatesearch=({target:{value}})=>{
setsearch(value)
}

  return (
    <div style={{backgroundImage:"url(https://images.unsplash.com/photo-1482005253821-5d6a2c685879?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}} className="flex pt-8 justify-center  w-full h-[100vh] bg-cover bg-center">
      <div className=" bg-white/40 w-[300px] md:w-[400px] h-[400px] rounded-lg">
        <form className="flex justify-center py-5" onSubmit={apidata}>
          <input
            type="search"
            value={search}
            onChange={updatesearch}
            placeholder="Enter City Name"
            className=" mr-2 rounded px-1 text-stone-950 bg-gray-200 placeholder-black/70 border-none outline-none"
          />
          <button className="w-auto my-auto border-none outline-none">
            search
          </button>
        </form>

       {error ? <p className='text-center text-red-600 bg-black/90 w-max m-auto rounded py-1 px-2 font-bold'>{error}</p> : (
 <div className='py-4 text-white relative h-[320px]'>

 <div className='flex justify-around items-center'>
 <div >
  <h1 className="text-center text-black mb-2 text-xl ">{weatherdata.name}</h1>
 <h3 className="text-center text-3xl text-black">{weatherdata.main?.temp}</h3>
 </div>

  {weatherdata.weather && weatherdata.weather.length > 0 && (
   <h2 className='text-xl font-bold text-black bg-white/90 h-[7vh] w-[10vw] p-6  sm:h-[7vh] sm:w-[10vw]  rounded-[100%] lg:rounded-full  flex items-center justify-center'>{weatherdata.weather[0].main}</h2>
   )}

 </div>


<div className='absolute w-full  bottom-0'> 
<div className='flex justify-around items-center rounded-bl-lg rounded-br-lg bg-black/70  py-3'>
   <div className='text-center flex  items-center flex-col'>
     <p>Humidity</p>
     <p className='text-white'>{weatherdata.main?.humidity}</p>
   </div>
   <div className='text-center flex  items-center flex-col'>
     <p>Degree</p>
     <p className='text-white '>{weatherdata.wind?.deg}</p>
   </div>
   <div className='text-center flex  items-center flex-col'>
     <p>Speed</p>
     <p className='text-white '>{weatherdata.wind?.speed}</p>
   </div>
 </div>
</div>

</div>
       )}

       
      </div>
    </div>
  );
}

export default Weather




// import axios from 'axios';
// import React, { useState } from 'react';

// const Weather = () => {
//   const [search, setSearch] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=020ac31ecf3b82c081d818fd371fc20e`);
//       setWeatherData(response.data);
//       setSearch('');
//       setError(null);
//     } catch (err) {
//       setWeatherData(null);
//       setError('City not found');
//     }
//   };

//   return (
//     <div className='relative left-0 top-0 bg-black/95 w-full h-[100vh]'>
//       <div className='border-red-700 border-solid bg-white p-4'>
//         <form className='flex justify-center py-5' onSubmit={handleSearch}>
//           <input
//             type="search"
//             value={search}
//             placeholder='Enter City Name'
//             className='mr-1 rounded px-1 bg-gray-100 text-stone-950 placeholder:text-gray-600 border-none outline-none'
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <button type="submit" className='w-auto my-auto border-none outline-none'>Search</button>
//         </form>

//         {error && <p className="text-red-600">{error}</p>}
//         {weatherData && (
//           <div className="text-black">
//             <h2>{weatherData.name}</h2>
//             <p>Temperature: {weatherData.main.temp}°C</p>
//             <p>Description: {weatherData.weather[0].description}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Weather;
