import { Container, Box, CardMedia, Paper, Button, styled, Link, Grid, Typography } from '@mui/material';

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

    const Img2 = styled('img')({
        margin: 'auto',
        display: 'block',
        width: '90%',
        height: '90%',
        borderRadius: '4px',

    });

    return (
        <>
            <Grid container justifyContent="center">
                <Grid xs={12} container>
                    <Grid
                        xs={12}
                    >
                        <Paper
                            sx={{
                                width: { xs: '100%', sm: '100%', md: '500px' },
                                boxShadow: '2px 4px 8px black',
                                marginX: 'auto'
                            }}
                        >
                            <Img src="https://i.imgur.com/01B3Y7q.jpeg" />
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
                                marginBottom: 8,
                                bgcolor: '#f3ce49',
                                boxShadow: '2px 4px 6px black',
                            }}
                        >
                            <Link href="https://business.lewisvillechamber.org/events/details/750yp-mixer-08-28-2025-30460?calendarMonth=2025-08-01"
                                sx={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}>
                                Register Here
                            </Link>
                        </Button>
                    </Grid>
                </Grid>
                <Grid xs={12} container>
                    <Grid
                        xs={12}
                    >
                        <Paper
                            sx={{
                                width: { xs: '100%', sm: '100%', md: '600px' },
                                boxShadow: '2px 4px 8px black',
                                marginX: 'auto',
                                marginY: '0.5vh'
                            }}
                        >
                            <Img src="https://i.imgur.com/2EPS3dc.png" />
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
                                marginBottom: 8,
                                bgcolor: '#f3ce49',
                                boxShadow: '2px 4px 6px black',
                            }}
                        >
                            <Link href="https://business.lewisvillechamber.org/events/details/750yp-professional-development-event-30554"
                                sx={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}>
                                Register Here
                            </Link>
                        </Button>
                    </Grid>
                </Grid>
                <Grid xs={12} container>
                    <Grid
                        xs={12}
                    >
                        <Paper
                            sx={{
                                width: { xs: '100%', sm: '100%', md: '500px' },
                                boxShadow: '2px 4px 8px black',
                                marginX: 'auto'
                            }}
                        >
                            <Img src="https://i.imgur.com/93i0hEt.png" />
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
                                marginBottom: 8,
                                bgcolor: '#f3ce49',
                                boxShadow: '2px 4px 6px black',
                            }}
                        >
                            <Link href="https://business.lewisvillechamber.org/events/details/750yp-mixer-09-25-2025-30461?calendarMonth=2025-09-01"
                                sx={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}>
                                Register Here
                            </Link>
                        </Button>
                    </Grid>
                </Grid>
                <Grid xs={12} container>
                    <Grid
                        xs={12}
                    >
                        <Paper
                            sx={{
                                width: { xs: '100%', sm: '100%', md: '600px' },
                                boxShadow: '2px 4px 8px black',
                                marginX: 'auto'
                            }}
                        >
                            <Img src="https://i.imgur.com/pynXg8J.png" />
                        </Paper>
                        <Paper
                            sx={{
                                width: { xs: '100%', sm: '100%', md: '600px' },
                                boxShadow: '2px 4px 8px black',
                                marginX: 'auto',
                                marginY: '0.5vh'
                            }}
                        >
                            <Img src="https://i.imgur.com/9gwRS4c.png" />
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
                                marginBottom: 8,
                                bgcolor: '#f3ce49',
                                boxShadow: '2px 4px 6px black',
                            }}
                        >
                            <Link href="https://business.lewisvillechamber.org/events/details/yp-olympics-30462?calendarMonth=2025-10-01"
                                sx={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}>
                                Register Here
                            </Link>
                        </Button>
                    </Grid>
                </Grid>

            </Grid>
            <Grid marginBottom={4}>
                <Typography fontWeight="bold" variant="h6">
                    Interested in more events like these?
                </Typography>
                <Typography variant="h6">
                    Check out our other events at the <a href="https://business.lewisvillechamber.org/events/">Lewisville Chamber!</a>
                </Typography>
            </Grid>
            <Grid marginBottom={4}>
                <Typography variant="h6">
                    And lastly, be sure to check out our <a href="https://lp.constantcontactpages.com/sl/yrCKui6/750YPNewsletter">Monthly Newsletter!</a>
                </Typography>
            </Grid>
        </>
    )
}

export default EventRotation;
