
import axios from "axios"
import { toast } from "react-toastify"


export const getPlacesData = async (type, sw, ne) => {
    try {
        const res = await  axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw?.lat,
                bl_longitude: sw?.lng,
                tr_longitude: ne?.lng,
                tr_latitude: ne?.lat,
              },
              headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-HOST': 'travel-advisor.p.rapidapi.com',
              },
            })
        const {data: {data}} = res
        return data
    } catch (error) {
        if(error.response){
            toast.error(`Could not get places...                                ${error.response?.data?.message}`)
        }
        console.error(error)
    }
}

export const getWeatherData = async (lat, lng) => {
    try {
        const {data: {data}} = await axios.get('https://weatherbit-v1-mashape.p.rapidapi.com/current', {
            params: {lon: lng, lat: lat},
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
              'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
            }
          })
          return data
    } catch (error) {
        if(error.response){
            toast.error(`Could not get weather data...                                ${error.response?.data?.message}`)
        }
        console.error(error)
    }
}
