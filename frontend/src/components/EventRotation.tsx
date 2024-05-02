import { Container, Box, CardMedia, Paper, Button, styled, Link, Grid } from '@mui/material';

const EventRotation = () => {
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        width: '100%',
        height: '100%',
        borderRadius: '4px',
        objectFit: 'cover',
        objectPosition: 'center',
    });

    return (
        <>
            <Grid container>
                <Grid
                    xs={12}
                    sm={6}
                >
                    <Paper
                        sx={{
                            width: { xs: '100%', sm: '100%', md: '500px' },
                            height: { xs: '100%', sm: '100%', md: '400px' },
                            boxShadow: '2px 4px 8px black',
                            top: '10px',
                            marginX: 'auto',
                        }}
                    >
                        <Img src="https://i.imgur.com/ss7UO4V.png" />
                    </Paper>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            textTransform: 'none',
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: '20px',
                            borderRadius: '60px',
                            paddingX: 8,
                            marginTop: 3,
                            marginBottom: 10,
                            bgcolor: '#f3ce49',
                            boxShadow: '2px 4px 6px black',
                        }}
                    >
                        <Link href="https://business.lewisvillechamber.org/events/details/soar-serve-750yp-30169?calendarMonth=2024-05-01"
                            sx={{
                                textDecoration: 'none',
                                color: 'black',
                            }}>
                            Register Here
                        </Link>
                    </Button>
                </Grid>
                <Grid
                    xs={12}
                    sm={6}
                >
                    <Paper
                        sx={{
                            width: { xs: '100%', sm: '100%', md: '500px' },
                            boxShadow: '2px 4px 8px black',
                            marginX: 'auto'
                        }}
                    >
                        <Img src="https://i.imgur.com/LS4RVr7.png" />
                    </Paper>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            textTransform: 'none',
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: '20px',
                            borderRadius: '60px',
                            paddingX: 8,
                            marginY: 3,
                            bgcolor: '#f3ce49',
                            boxShadow: '2px 4px 6px black',
                        }}
                    >
                        <Link href="https://business.lewisvillechamber.org/events/details/750yp-rise-thrive-05-14-2024-29922?calendarMonth=2024-05-01"
                            sx={{
                                textDecoration: 'none',
                                color: 'black',
                            }}>
                            Register Here
                        </Link>
                    </Button>
                </Grid>
                <Grid
                    xs={12}
                    sm={6}
                >
                    <Paper
                        sx={{
                            width: { xs: '100%', sm: '100%', md: '500px' },

                            boxShadow: '2px 4px 8px black',
                            marginX: 'auto'
                        }}
                    >
                        <Img src="https://i.imgur.com/vGnuIkE.png" />
                    </Paper>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            textTransform: 'none',
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: '20px',
                            borderRadius: '60px',
                            paddingX: 8,
                            marginTop: 3,
                            marginBottom: 10,
                            bgcolor: '#f3ce49',
                            boxShadow: '2px 4px 6px black',
                        }}
                    >
                        <Link href="https://business.lewisvillechamber.org/events/details/750yp-mixer-05-23-2024-29931?calendarMonth=2024-05-01"
                            sx={{
                                textDecoration: 'none',
                                color: 'black',
                            }}>
                            Register Here
                        </Link>
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default EventRotation;