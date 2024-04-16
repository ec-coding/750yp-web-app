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
    
                            boxShadow: '2px 4px 8px black',
                            marginX: 'auto'
                        }}
                    >
                        <Img src="https://i.imgur.com/XhFHAlE.png" />
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
                            marginTop: 5,
                            marginBottom: 10,
                            bgcolor: '#f3ce49',
                            boxShadow: '2px 4px 6px black',
                        }}
                    >
                        <Link href="https://business.lewisvillechamber.org/events/details/750yp-mixer-04-25-2024-29930?calendarMonth=2024-04-01"
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
                            marginY: 5,
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
            </Grid>
        </>
    )
}

export default EventRotation;