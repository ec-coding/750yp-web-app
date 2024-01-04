import React from 'react'
import { Container, Box, CardMedia, Grid, Modal, makeStyles } from '@mui/material';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <Container maxWidth={false} disableGutters sx={{ paddingY: '2vh' }} className="bg-gray-100">
            <Grid container alignItems="center" spacing={2} marginY={0} paddingY={1} paddingX={0}>

                <Grid item xs={12} sm={4} container alignItems="center" justifyContent="center" margin={0}>
                    <CardMedia component="img" image="https://i.imgur.com/ICaBO54.png" alt="750YP" className='hero-image' style={{ width: '25%' }} />
                </Grid>

                <Grid item xs={12} sm={8} margin={0} container justifyContent="space-evenly">
                    <div className='flex space-x-10' style={{ width: '100%' }}>
                        <div className='space-y-2' style={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }} className='text-purple-950'>
                                Company
                            </Typography>
                            <Typography variant="subtitle1" className='text-purple-950'>
                                About Us
                            </Typography>
                            <Typography variant="subtitle1" className='text-purple-950'>
                                Events
                            </Typography>
                            <Typography variant="subtitle1" className='text-purple-950'>
                                Contact Us
                            </Typography>
                        </div>
                        <div className='space-y-2' style={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }} className='text-purple-950'>
                                Legal
                            </Typography>
                            <Typography variant="subtitle1" className='text-purple-950'>
                                Privacy Policy
                            </Typography>
                            <Typography variant="subtitle1" className='text-purple-950'>
                                Terms & Conditions
                            </Typography>
                            <Typography variant="subtitle1" className='text-purple-950'>
                                Terms of Use
                            </Typography>
                        </div>
                        <div className='space-y-2' style={{ flex: 3 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }} className='text-purple-950'>
                                Get Connected
                            </Typography>
                            <div className='flex space-x-5'>
                                <CardMedia component="img" image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png" alt="750YP" className='hero-image' style={{ width: '35px' }} />
                                <CardMedia component="img" image="https://static-00.iconduck.com/assets.00/social-instagram-icon-1024x1024-qshv5qmi.png" alt="750YP" className='hero-image' style={{ width: '35px' }} />
                                <CardMedia component="img" image="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="750YP" className='hero-image' style={{ width: '35px' }} />
                            </div>
                        </div>
                    </div>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Footer
