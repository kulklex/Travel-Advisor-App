import React, { useState, useEffect, createRef } from 'react';
import useStyles from './styles'
import { CircularProgress, FormControl, FormLabel, Grid, MenuItem, Select, Typography } from '@mui/material';
import PlaceDetails from './../PlaceDetails/PlaceDetails';


const List = ({type, setType, rating, setRating, places, childClicked, isLoading}) => {
    const classes = useStyles()
    
    
    const [elementRefs, setElementRefs] = useState([])

    // Anytime there's click on the map, this will make it scroll to that location
    // The useEffect will repeat this funtionality everytime there's a change in places 
    useEffect(() => {
        setElementRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
    }, [places])



    return (
        <div className={classes.container}>
            <Typography variant='h4' >Restaurants, Hotels & Attractions around you</Typography>
            
            {isLoading ? (<div className={classes.loading}>
                <CircularProgress size="5rem" />
            </div>) :
            <div>
                <FormControl className={classes.formControl} style={{padding: '5px'}}>
                    <FormLabel>Type</FormLabel>
                    <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                        <MenuItem value="restaurants">Restaurants</MenuItem>
                        <MenuItem value="hotels">Hotels</MenuItem>
                        <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
                </FormControl>
                
                {/* <FormControl className={classes.formControl} style={{padding: '5px'}}>
                    <FormLabel>Rating</FormLabel>
                    <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                        <MenuItem  value="">All</MenuItem>
                        <MenuItem value="3">Above 3.0</MenuItem>
                        <MenuItem value="4">Above 4.0</MenuItem>
                        <MenuItem value="4.5">Above 4.5</MenuItem>
                    </Select>
                </FormControl> */}
                <Grid container spacing={3} className={classes.list}>
                    {places && places?.map((place, i) => (
                        <Grid ref={elementRefs[i]} item key={i} xs={12}>
                            <PlaceDetails selected={Number(childClicked) === i} refProp={elementRefs[i]} place={place}/>
                        </Grid>))}
                </Grid>
            </div>
            }
        </div>
    );
}

export default List;
