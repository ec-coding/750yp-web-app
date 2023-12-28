import React from 'react'
import { Container, Box, CardMedia, Grid, Modal, makeStyles, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';

const EventPanel = () => {
    return (
        <>
            <Box className="bg-gray-200 rounded-lg">
                <Grid xs={12} sm={6} container>
                    <div className='flex-initial bio-panel space-y-4 p-3'>
                        <div className="w-80 h-80 rounded-lg overflow-hidden">
                            <img src="https://i.imgur.com/wM07UOj.png" alt="Your Image" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-white mx-auto flex flex-col p-5 rounded-lg">
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Event
                            </Typography>
                            <Typography>
                                Event Subtitle
                            </Typography>
                            <Typography>
                                Date & Time
                            </Typography>
                            <Grid container className="space-x-10">
                                <Typography>
                                    Attending
                                </Typography>
                                <Typography>
                                    Cost
                                </Typography>
                            </Grid>
                        </div>
                    </div>
                </Grid>
            </Box>
        </>
    )
}

export default EventPanel
