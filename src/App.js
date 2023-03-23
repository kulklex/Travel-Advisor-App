import React, {useEffect, useState} from 'react'
import { CssBaseline, Grid } from '@mui/material'
import Header from './Components/Header/Header'
import Map from './Components/Map/Map'
import List from './Components/List/List'
import { getPlacesData, getWeatherData } from './api'

export default function App() {
  const [places, setPlaces] = useState([])
  const [weather, setWeather] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})
  const [childClicked, setChildClicked] = useState(null)

  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const [filteredPlaces, setFilteredPlaces] = useState([])

  //Automatically set the coordinates to be the coordinates of the users location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
  }, [])
  


  //Occurs only when the rating changes
  useEffect(() => {
    const filteredPlacesVariable = places?.filter((place) => place?.rating > rating)

    setFilteredPlaces(filteredPlacesVariable)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating])



  //Occurs only when there's any change in the type, coordinates or bounds
  useEffect(() => {
  if(bounds?.sw && bounds?.ne){
    setIsLoading(true)

    getWeatherData(coordinates?.lat, coordinates?.lng).then((data) => {
      setWeather(data)
    })

    getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => { 
      setPlaces(data)
      setFilteredPlaces([])
      setIsLoading(false)
    })
   }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, bounds])


  return (
    <>
      <CssBaseline/>
      <Header setCoordinates={setCoordinates}/>
      <br/>
      <Grid container spacing={3} style={{ width: '100%' }} >
        <Grid item xs={12} md={4}>
          <List type={type} rating={rating} setType={setType} setRating={setRating} places={filteredPlaces?.length ? filteredPlaces : places} childClicked={childClicked} isLoading={isLoading}/>
        </Grid>
        <Grid item xs={12} md={8} sm={4}>
          <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} places={filteredPlaces?.length ? filteredPlaces : places} setChildClicked={setChildClicked} weather={weather} />
        </Grid>
      </Grid>
    </>
  )
}
