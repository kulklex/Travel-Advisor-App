import React, {useState} from 'react';
import { Search } from '@mui/icons-material';
import { AppBar, Box, InputBase, Toolbar, Typography } from '@mui/material';
import { Autocomplete } from '@react-google-maps/api';
import useStyles from './styles';

const Header = ({setCoordinates}) => {
    const classes = useStyles()
    const [autoComplete, setAutoComplete] = useState(null)
    
    const handleOnLoad = (autoC) => setAutoComplete(autoC)
    const handlePlaceChanged = () => {
        const lat = autoComplete?.getPlace()?.geometry.location.lat()
        const lng = autoComplete?.getPlace()?.geometry.location.lng()

        setCoordinates({lat, lng})
    }

    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>d
                <Typography variant='h5' className={classes.title}>Travel Advisory</Typography>
                <Box display='flex'>
                    <Typography variant='65' className={classes.title}>Explore new places</Typography>
                    {/* <Autocomplete onLoad={(autoC) => handleOnLoad(autoC)} onPlaceChanged={handlePlaceChanged}>  */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <Search/>
                            </div>
                            <InputBase placeholder='Search...' className={{root: classes.inputRoot, input: classes.inputInput}} />
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
