import React from 'react';
import GoogleMapReact from 'google-map-react';
import useStyles from './styles'
import { Paper, Typography, useMediaQuery } from '@mui/material';
import Rating from '@mui/material/Rating';
import { LocationOnOutlined } from '@mui/icons-material';
import mapStyles from '../../mapStyles'

const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked}) => {
    const classes = useStyles()
    const isDesktop = useMediaQuery('(min-width:600px)')

    

    const handleChange = (e) => {
        setCoordinates({lat: e.center.lat, lng: e.center.lng})
        setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
    }


    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}} 
                defaultCenter={coordinates} center={coordinates} defaultZoom={14} margin={[50, 50, 50, 50]} 
                options={{zoomControl: true, mapTypeControl: false, streetViewControl: false, styles: mapStyles, disableDefaultUI: true}}
                onChange={(e) => handleChange(e)} onChildClick={(child) => setChildClicked(child)}
            >
                    {places?.length && places?.map((place, i) => (
                    <div key={i} className={classes.markerContainer} lat={Number(place?.latitude)} lng={Number(place?.longitude)}>
                        {!isDesktop ? (<LocationOnOutlined color="primary" fontSize='large'/>) 
                        : (<Paper elevation={3} className={classes.paper}>
                            <Typography className={classes.typography} variant="subtitle2" gutterBottom >
                                {place?.name}
                            </Typography>

                            {place?.photo && (<img src={place?.photo ? place?.photo?.images?.large?.url : 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
                            className={classes.pointer} alt={places?.name} />)}
                            {place?.rating && (<Rating size="small" value={Number(place?.rating)} readOnly />)}
                        </Paper>)}
                    </div>))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;
