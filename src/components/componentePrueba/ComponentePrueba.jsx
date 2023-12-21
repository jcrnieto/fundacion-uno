import axios from 'axios';
import React,{useEffect} from 'react'


const ComponentePrueba = () => {
  const api = async () => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=9078e2dbe447ae39d2c39033a26174c3&language=en-ES'
    const respApi = await axios.get(url);
    console.log(respApi.data.results)
  }

  useEffect(() => {
   api() 
  
  }, [])
  
  return (
    <div>ComponentePrueba</div>
  )
}

export default ComponentePrueba