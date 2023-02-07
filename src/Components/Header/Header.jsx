import React from 'react';
import { Search } from '@mui/icons-material';
import { AppBar, Box, InputBase, Toolbar, Typography } from '@mui/material';
import { Autocomplete } from '@react-google-maps/api';
import useStyles from './styles';

const Header = () => {
    const classes = useStyles()
    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h5' className={classes.title}>Travel Advisory</Typography>
                <Box display='flex'>
                    <Typography variant='65' className={classes.title}>Explore new places</Typography>
                    {/* <Autocomplete> */}
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
