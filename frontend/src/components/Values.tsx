import {
    Grid,
    Typography,
    Paper,
    styled,
    useMediaQuery
} from '@mui/material';

const Values = ({ name, img, desc }: { name: string, img: string, desc: string }) => {

    const MobileWidthBreakpoint = useMediaQuery('(max-width: 600px)');

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
        <Grid container alignItems="center"
            sx={{
                backgroundColor: '#576B95',
                borderRadius: 4,
                padding: 4,
                boxShadow: "0px 4px 8px gray",
                gap: 3,
                ...(MobileWidthBreakpoint && {
                    container: {  // Apply styles only when between 'xd' and 'sm'
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center'
                    },
                }),
            }}
        >
            <Grid
            sx={{
                ...(MobileWidthBreakpoint && {
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    marginX: 'auto'
            }),
            }}
            >
                <Paper>
                    <Img src={img}
                        sx={{
                            width: '100px'
                        }}
                    />
                </Paper>
            </Grid>
            <Grid>
                <Typography
                    variant='h4'
                    sx={{
                        fontWeight: "bold",
                        fontSize: 22,
                        marginBottom: 2,
                        color: 'white',
                        ...(MobileWidthBreakpoint && {
                                display: 'flex',
                                justifyContent: 'center',
                                textAlign: 'center'
                        }),
                    }}
                    className='text-purple-950'
                >
                    {name}
                </Typography>
                <Typography variant='body1' 
                sx={{ 
                    fontSize: 18,
                    color: 'white',
                    ...(MobileWidthBreakpoint && {
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center'
                }),
                }}>
                    {desc}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Values
