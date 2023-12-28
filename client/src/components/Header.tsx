import React from 'react'
import { Container, Box, CardMedia, Grid, Modal, makeStyles } from '@mui/material';
import Typography from '@mui/material/Typography';

const Header = () => {
    return (
        <Container maxWidth={false} disableGutters sx={{}} className="bg-gray-100">
            <Grid container alignItems="center" spacing={2} marginY={0} paddingY={1} paddingX={10}>

                <Grid xs={12} sm={6} container alignItems="center" justifyContent="space-between" margin={0}>
                    <CardMedia component="img" image="https://i.imgur.com/ICaBO54.png" alt="750YP" className='hero-image' sx={{ borderRadius: 2 }} style={{ width: '15%'}} />
                </Grid>

                <Grid xs={12} sm={6} margin={0}>
                    <div className='flex space-x-10 justify-end items-center'>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            Home
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            About Us
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            Events
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            Log In
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }} className='my-auto'>
                            <button className='bg-yellow-400 font-bold mx-2 py-1 px-16 rounded-full focus:outline-none focus:ring focus:border-blue-300'>Sign Up</button>
                        </Typography>
                    </div>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Header
