// Libraries & Frameworks ///////////////////////////////////////////////
import {
	Container,
	Box,
	Grid,
	Typography,
	CardMedia,
	styled,
	Paper,
	useMediaQuery
} from '@mui/material';
// import { useAuth0 } from '@auth0/auth0-react';
// Components, Hooks, & Utils ///////////////////////////////////////////////
import ContactUs from '../../components/ContactUs';
import EventRotation from '../../components/EventRotation';
import Newsletter from '../../components/Newsletter';


// Main Component ///////////////////////////////////////////////
const Home = () => {
	const MobileWidthBreakpoint = useMediaQuery('(max-width: 600px)');

	// Styles ///////////////////////////////////////////////////////////////
	const Img = styled('img')({
		margin: 'auto',
		display: 'block',
		width: '100%',
		height: '100%',
		borderRadius: '4px',
		objectFit: 'cover',
		objectPosition: 'center',
	});

	// Render ///////////////////////////////////////////////////////////////
	return (
		<>

			<Container maxWidth={false} disableGutters>
				<Grid
					container
					alignContent={'center'}
					alignItems={'center'}
					justifyContent={'space-between'}
					sx={{
						flexGrow: 1,
						background: '#0E2545',
						paddingY: { xs: 6, sm: 6, md: 6, lg: 8 },
						paddingX: { xs: 0, sm: 0, md: 4, lg: 4 }
					}}
					marginX={'auto'}
				>
					<Grid container sx={{ maxWidth: 1280 }} mx={'auto'}>
						<Grid item container xs={12} sm={6} alignItems="center">
							<Box
								sx={{
									paddingRight: { xs: 4, sm: 4, md: 6, lg: 6 },
									paddingLeft: { xs: 4, sm: 4, md: 2, lg: 2 },
									textAlign: { xs: 'center', sm: 'center', md: 'left' }
								}}
							>
								<Typography
									variant="h4"
									color={'white'}
									sx={{
										fontWeight: 'bold', marginBottom: 4,
									}}
								>
									Welcoming all Young Professionals!
								</Typography>
								<Typography variant="body1" sx={{ fontSize: 22, color: 'white', paddingBottom: 6 }}>
									750 YP represents a fresh initiative by the Lewisville Area
									Chamber of Commerce, focused on bringing together emerging young
									professionals and nurturing the future leaders of our community.
								</Typography>
								{/* {user ? (
									<></>
								) : (
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
											bgcolor: '#f3ce49',
										}}
									>
										Sign Up
									</Button>
								)} */}
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Paper
								square={false}
								elevation={3}
								sx={{
									width: { xs: '100%', sm: '100%', md: '100%' },
									height: { xs: '100%', sm: '100%', md: '500px' },
									boxShadow: '2px 4px 8px black'
								}}
							>
								<Img src='https://i.imgur.com/E8zEkIu.jpg' alt="750YP" />
							</Paper>
						</Grid>
					</Grid>
				</Grid>

				{/* events */}
				<Box sx={{
					marginTop: { xs: 6, sm: 6, md: 6, lg: 8 },
					marginBottom: { xs: 2, sm: 2, md: 4, lg: 4 },
					textAlign: 'center',
					maxWidth: 1280,
					paddingX: { xs: 2 }
				}}
					marginX={'auto'}
				>
					<Typography variant="h4" sx={{
						fontWeight: 'bold',
						mb: 3,
					}}>
						Our Upcoming Events
					</Typography>
					<Typography sx={{ fontSize: 20, mb: 4 }}>
						Participate in our community gatherings for the opportunity to
						network and develop collectively.
					</Typography>
					{/* <Typography variant="h5">
						Please check back in 2025!
					</Typography> */}
					<EventRotation />
				</Box>

				{/* about section */}


				<ContactUs />
			</Container >

		</>
	);
};

export default Home;