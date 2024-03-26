// Libraries & Frameworks ///////////////////////////////////////////////
import {
	Container,
	Box,
	Grid,
	Typography,
	Button,
	Card,
	CardMedia,
	styled,
	Paper,
} from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

// Components, Hooks, & Utils ///////////////////////////////////////////////
import ContactUs from '../../components/ContactUs';

// Main Component ///////////////////////////////////////////////
const Home = () => {
	// Hooks ///////////////////////////////////////////////////////////////
	// const { user } = useUser();
	const { user } = useAuth0();

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
				{/* intro */}
				<Grid
					container
					alignContent={'center'}
					alignItems={'center'}
					justifyContent={'space-between'}
					sx={{ flexGrow: 1, backgroundColor: '#bae6fd', padding: 10 }}
				>
					<Grid item xs={12} sm={6}>
						<Box p={16}>
							<Typography
								variant="h4"
								color={'#3b0764'}
								sx={{ fontWeight: 'bold', marginBottom: 2 }}
							>
								Welcoming all Young Professionals!
							</Typography>
							<Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
								750 YP represents a fresh initiative by the Lewisville Area
								Chamber of Commerce, focused on bringing together emerging young
								professionals and nurturing the future leaders of our community.
							</Typography>
							{user ? (
								<></>
							) : (
								<Button
									variant="contained"
									color="primary"
									sx={{
										textTransform: 'none',
										color: 'black',
										fontWeight: 'bold',
										borderRadius: '60px',
										paddingX: 8,
										bgcolor: '#f3ce49',
									}}
								>
									Sign Up
								</Button>
							)}
						</Box>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper
							square={false}
							elevation={3}
							sx={{ width: '100%', height: '500px' }}
						>
							<Img src="https://i.imgur.com/VzXciUc.jpg" alt="750YP" />
						</Paper>
					</Grid>
				</Grid>

				{/* events */}
				<Box sx={{ my: 8, textAlign: 'center' }}>
					<Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
						Our Upcoming Events
					</Typography>
					<Typography sx={{ fontSize: 20, mb: 4 }}>
						Participate in our community gatherings for the opportunity to
						network and develop collectively.
					</Typography>
					{/* events component goes here */}
				</Box>

				{/* about section */}
				<Box sx={{ backgroundColor: '#FFECB3', py: 8 }}>
					<Container maxWidth="lg">
						<Grid container spacing={5}>
							<Grid item xs={12} sm={6}>
								<Card>
									<CardMedia
										component="img"
										image="https://i.imgur.com/8YiFgwj.jpg"
										alt="750YP"
										sx={{ height: 600, borderRadius: '4px' }}
									/>
								</Card>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Grid item xs={12} sm={6}>
									<Typography variant="h4" sx={{ fontWeight: 'bold' }}>
										About 750YP
									</Typography>
								</Grid>
								<Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
									{/* topics */}
									<Box
										sx={{
											backgroundColor: '#fff',
											p: 3,
											borderRadius: '4px',
											boxShadow: 1,
										}}
									>
										<Typography variant="h5" sx={{ fontWeight: 'bold' }}>
											Sip & Strive (Mixers)
										</Typography>
										<Typography variant="body1" sx={{ mt: 1 }}>
											Join us for an exhilarating evening of connections and
											collaborations at our vibrant networking mixer!
										</Typography>
									</Box>
									{/* add more */}
								</Box>
							</Grid>
						</Grid>
					</Container>
				</Box>

				<ContactUs />
			</Container>
		</>
	);
};

export default Home;
