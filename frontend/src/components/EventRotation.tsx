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
                {/* <Grid
                    xs={12}
                    sm={12}
                >
                    <Paper
                        sx={{
                            width: { xs: '100%', sm: '100%', md: '500px' },

                            boxShadow: '2px 4px 8px black',
                            marginX: 'auto'
                        }}
                    >
                        <Img src="https://i.imgur.com/i9EsPrf.jpeg" />
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
                            marginBottom: 8,
                            bgcolor: '#f3ce49',
                            boxShadow: '2px 4px 6px black',
                        }}
                    >
                        <Link href="https://business.lewisvillechamber.org/events/details/yp-s-og-s-mixer-29935?calendarMonth=2024-09-01"
                            sx={{
                                textDecoration: 'none',
                                color: 'black',
                            }}>
                            Register Here
                        </Link>
                    </Button>
                </Grid> */}

                <Grid xs={12} container>
                    <Grid
                        xs={12}
                    >
                        <Paper
                            sx={{
                                width: { xs: '100%', sm: '100%', md: '500px' },
                                boxShadow: '2px 4px 8px black',
                                top: '10px',
                                marginX: 'auto',
                            }}
                        >
                            <Img src="https://i.imgur.com/P4cW5yE.png" />
                        </Paper>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid xs={12} md={3} py={3} my={3} sx={{}}>
                            <Typography marginBottom={1} variant="h5">Presenting Sponsor: </Typography>
                            <Grid container justifyContent="center">
                                <Grid item xs={12} lg={10}>
                                    <a href="https://www.gotchacovered.com/lewisville/#~971bf9db-53ac-4d36-8930-55f7a5de6249">
                                        <Img2 src="https://i.imgur.com/rekbMro.png" />
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={12} md={3} py={3} my={3} sx={{}}>
                            <Typography marginBottom={1} variant="h5">Award Sponsor: </Typography>
                            <Grid container justifyContent="center">
                                <Grid item xs={12} lg={10} sx={{
                                }}>
                                    <a href="https://www.rbfcu.org/?gclid=Cj0KCQjwrp-3BhDgARIsAEWJ6SwfsPlUxM6hx2FGkSWTs9_oAG9ueKfQhjlh4MoWXOUCtUZeyPmsDisaAnZUEALw_wcB&ef_id=Cj0KCQjwrp-3BhDgARIsAEWJ6SwfsPlUxM6hx2FGkSWTs9_oAG9ueKfQhjlh4MoWXOUCtUZeyPmsDisaAnZUEALw_wcB:G:s&gad_source=1">
                                        <Img2 src="https://i.imgur.com/2l7ReID.jpeg" />
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
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
                            <Img src="https://i.imgur.com/rT9G6v1.png" />
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
                            <Link href="https://business.lewisvillechamber.org/events/details/750yp-olympics-29936"
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
