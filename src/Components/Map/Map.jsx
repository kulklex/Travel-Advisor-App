import React from 'react';
import GoogleMapReact from 'google-map-react';
import { LocationOnOutlined } from '@mui/icons-material';
import useStyles from './styles'
import { useMediaQuery } from '@mui/material';

const Map = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery('(min-width:600px)')
    const coordinates = {lat : 0, lng: 0}

    const handleChange = () => {}

    const handleChildClick = () => {}

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}} 
                defaultCenter={coordinates} center={coordinates} defaultZoom={14} margin={[50, 50, 50, 50]} options={''} onChange={handleChange} onChildClick={handleChildClick}>

                </GoogleMapReact>
        </div>
    );
}

export default Map;
