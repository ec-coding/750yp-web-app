// Libraries & Frameworks ///////////////////////////////////////////////
// import { useUser } from '@auth0/nextjs-auth0/client';
import {
	Container,
	Box,
	Grid,
	Typography,
	Button,
	Card,
	CardMedia,
	// CardContent,
	// CardActions,
} from '@mui/material';
// import Link from 'next/link';
import { useAuth0 } from '@auth0/auth0-react';

// Components, Hooks, & Utils ///////////////////////////////////////////////
import ContactUs from '../../components/ContactUs';

// Main Component ///////////////////////////////////////////////
const Home = () => {
	// Hooks ///////////////////////////////////////////////////////////////
	// const { user } = useUser();
  const { user } = useAuth0();

	// Render ///////////////////////////////////////////////////////////////
	return (
		<>
			<Container maxWidth={false} disableGutters>
				{/* intro */}
				<Grid
					container
					spacing={2}
					sx={{ backgroundColor: '#E0F7FA', padding: 5 }}
				>
					<Grid item xs={12} sm={6}>
						<Typography
							variant="h3"
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
									bgcolor: '#f5f5f5',
								}}
							>
								Sign Up
							</Button>
						)}
					</Grid>
					<Grid item xs={12} sm={6}>
						<CardMedia
							component="img"
							image="https://i.imgur.com/VzXciUc.jpg"
							alt="750YP"
							sx={{ width: '100%', borderRadius: '8px' }}
						/>
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
					{/* events component */}
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
