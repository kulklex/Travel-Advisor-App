import React from 'react';
import Rating, { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import useStyles from './styles'
import { LocationOnOutlined, PhoneOutlined } from '@mui/icons-material';

const PlaceDetails = ({place, selected, refProps}) => {
    const classes = useStyles()
    

    if(selected) refProps?.current?.scrollIntoView({behavior: "smooth", block: "start"})



    return (
        <Card elevation={6}>
            <CardMedia style={{height: 350}} image={place?.photo ? place?.photo?.images?.large?.url : 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={place?.name}/>
            <CardContent>
                <Typography gutterBottom variant='h5' >{place?.name}</Typography>

                {place?.rating && (
                <Box display="flex" justifyContent="space-between">
                    {place?.rating && (
                    <Rating value={Number(place?.rating)} readOnly />)}
                    <Typography gutterBottom variant='subtitle1' >Out of {place?.num_reviews} reviews</Typography>
                </Box>)}

                {place?.price_level && 
                (<Box display="flex" justifyContent="space-between">
                    <Typography variant='subtitle1' >Price</Typography>
                    <Typography gutterBottom variant='subtitle1' >{place?.price_level}</Typography>
                </Box>)}
                
                <Box display="flex" justifyContent="space-between">
                    <Typography variant='subtitle1' >Ranking</Typography>
                    <Typography gutterBottom variant='subtitle1' >{place?.ranking}</Typography>
                </Box>

                {place?.awards?.map((award) => (
                <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                    <img src={award?.images?.small} alt={award?.display_name}/>
                    <Typography variant='subtitle2' color="textSecondary" >{award?.display_name}</Typography>
                </Box>))}

                {place?.cuisine?.map(({name}) => (<Chip className={classes.chip} key={name} size="small" label={name} />))}

                {place?.address && (
                <Typography gutterBottom variant='subtitle2' color="textSecondary" className={classes.subtitle} >
                    <LocationOnOutlined /> {place?.address}
                </Typography>)}

                {place?.phone && (
                <Typography gutterBottom variant='subtitle2' color="textSecondary" className={classes.spacing} >
                    <PhoneOutlined /> {place?.phone}
                </Typography>)}

                {place?.website && 
                <CardActions>
                    {/* When we click the button it takes us to the web_url in a new tab */}
                    <Button size="small" color="primary" onClick={() => window.open(place?.web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(place?.website, '_blank')}>
                        Go to Website
                    </Button>
                </CardActions>}
            </CardContent>
        </Card>
    );
}

export default PlaceDetails;
