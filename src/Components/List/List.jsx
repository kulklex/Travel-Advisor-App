import React, { useState } from 'react';
import useStyles from './styles'
import { FormControl, FormLabel, Grid, MenuItem, Select, Typography } from '@mui/material';
import PlaceDetails from './../PlaceDetails/PlaceDetails';


const List = () => {
    const classes = useStyles()

    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState('All')

    const places = [
        {name: 'Cool Place'},
        {name: 'Best Beverages'},
        {name: 'Nice Suya'},
        {name: 'Cheaper Options'},
        {name: 'Amala Hey!'},
        {name: "Vegetarian's Spot"},
        {name: 'Frozen Foods'},
    ]

    return (
        <div className={classes.container}>
            <Typography variant='h4' >Restaurants, Hotels & Attractions around you</Typography>
            <div>
                <FormControl className={classes.formControl} style={{padding: '5px'}}>
                    <FormLabel>Type</FormLabel>
                    <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                        <MenuItem value="restaurants">Restaurants</MenuItem>
                        <MenuItem value="hotels">Hotels</MenuItem>
                        <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
                </FormControl>
                
                <FormControl className={classes.formControl} style={{padding: '5px'}}>
                    <FormLabel>Rating</FormLabel>
                    <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                        <MenuItem  value="All">All</MenuItem>
                        <MenuItem value="3">Above 3.0</MenuItem>
                        <MenuItem value="4">Above 4.0</MenuItem>
                        <MenuItem value="4.5">Above 4.5</MenuItem>
                    </Select>
                </FormControl>
                <Grid container spacing={3} className={classes.list}>
                    {places?.map((place) => (<Grid item key={place?.name} xs={12}>
                        <PlaceDetails place={place}  />
                    </Grid>))}
                </Grid>
            </div>
        </div>
    );
}

export default List;
