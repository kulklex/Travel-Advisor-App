
import axios from "axios"
import { toast } from "react-toastify"


export const getPlacesData = async ({type, sw, ne}) => {
    console.log(type)
    try {
        const res = await  axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw?.lat,
                bl_longitude: sw?.lng,
                tr_longitude: ne?.lng,
                tr_latitude: ne?.lat,
              },
              headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
                'X-RapidAPI-HOST': 'travel-advisor.p.rapidapi.com',
              },
            })
            console.log(res?.data)
        const {data} = res
        return data
    } catch (error) {
        if(error.response){
            toast.error(`Could not get places...                                ${error.response?.data?.message}`)
        }
        console.error(error)
    }
}


