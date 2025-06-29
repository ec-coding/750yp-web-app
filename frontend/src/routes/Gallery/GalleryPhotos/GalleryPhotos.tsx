import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, CardMedia, Grid, Modal, useMediaQuery } from '@mui/material';

export default function GalleryPhotos({ customProp }: { customProp: string }) {

    return (
        <>
            <Grid item
                xs={12}
                md={5.75}
                lg={5}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid white',
                    margin: '0.5vh'
                }}
            >
                <CardMedia
                    component="img"
                    image={customProp}
                    alt="Zoomable"
                    loading="lazy"
                    sx={{
                        width: '100%', // Full width
                        height: '100%', // Full height
                        objectFit: 'cover', // Cover the container with the image while maintaining aspect ratio
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.5)'
                        }
                    }}
                />
            </Grid>
        </>
    )
}