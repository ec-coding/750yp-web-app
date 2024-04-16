// Libraries & Frameworks ///////////////////////////////////////////////
import {
	Container,
	Box,
	Grid,
	Typography,
	Button,
	Link,
	CardMedia,
	styled,
	Paper,
	useMediaQuery
} from '@mui/material';
// import { useAuth0 } from '@auth0/auth0-react';
// Components, Hooks, & Utils ///////////////////////////////////////////////
import ContactUs from '../../components/ContactUs';
import EventRotation from '../../components/EventRotation';


// Main Component ///////////////////////////////////////////////
const Home = () => {
	// Hooks ///////////////////////////////////////////////////////////////
	// const { user } = useUser();
	// const { user } = useAuth0();
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
					sx={{ flexGrow: 1, backgroundColor: '#bae6fd', 
					paddingY: { xs: 6, sm: 6, md: 6, lg: 8 }, 
					paddingX: { xs: 0, sm: 0, md: 4, lg: 4 } 
				}}
					marginX={'auto'}
				>
					<Grid container sx={{ maxWidth: 1280 }} mx={'auto'}>
						<Grid item xs={12} sm={6}>
							<Box
								sx={{
									paddingRight: { xs: 4, sm: 4, md: 6, lg: 6 },
									paddingLeft: { xs: 4, sm: 4, md: 2, lg: 2 },
									paddingY: { xs: 0, sm: 0, md: 6, lg: 16 },
									textAlign: { xs: 'center', sm: 'center', md: 'left' }
								}}
							>
								<Typography
									variant="h4"
									color={'#3b0764'}
									sx={{ fontWeight: 'bold', marginBottom: 2 }}
								>
									Welcoming all Young Professionals!
								</Typography>
								<Typography variant="body1" sx={{ fontSize: 22, marginY: 4 }}>
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
								<Img src='https://i.imgur.com/VzXciUc.jpg' alt="750YP" />
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
					<EventRotation/>
				</Box>

				{/* about section */}
				<Box sx={{ backgroundColor: '#FFECB3', py: 8 }}>
					<Container maxWidth="lg">
						<Grid container spacing={5}>
							{MobileWidthBreakpoint ? null : (
								<Grid item xs={12} sm={6}>
									<CardMedia
										component='img'
										image='https://i.imgur.com/8YiFgwj.jpg'
										alt='750YP'
										sx={{
											boxShadow: '2px 4px 12px black',
											height: "500px",
											marginBottom: "20px"
										}}
									/>
									<CardMedia
										component='img'
										image='https://i.imgur.com/9sny6hU.jpg'
										alt='750YP'
										sx={{
											boxShadow: '2px 4px 12px black',
											height: "500px",
										}}
									/>
								</Grid>
							)}
							<Grid item xs={12} sm={6}>
								<Grid item xs={12} sm={6}
									marginBottom={4}
									sx={{
										marginTop: { xs: 0, sm: 0, md: 2 },
									}}
								>
									<Typography variant="h4" sx={{
										fontWeight: 'bold',
										textAlign: { xs: 'center', sm: 'center', md: 'left' },
										paddingX: { xs: 0, md: 2 }
									}}>
										About 750YP
									</Typography>
								</Grid>
								<Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
									{/* topics */}
									<Box
										sx={{
											backgroundColor: "white",
											borderRadius: 4,
											padding: 4,
											boxShadow: "0px 4px 8px gray",
										}}
									>
										<Typography
											variant='h4'
											sx={{
												fontWeight: "bold",
												fontSize: 22,
												marginBottom: 2,
											}}
											className='text-purple-950'
										>
											Sip & Strive (Mixers)
										</Typography>
										<Typography variant='body1' sx={{ fontSize: 18 }}>
											Join us for an exhilarating evening of connections and
											collaborations at our vibrant networking mixer! Unwind
											in a laid-back atmosphere designed for young
											professionals eager to expand their networks. Elevate
											your business game, make meaningful connections, and
											enjoy the dynamic energy of like-minded individuals.
											Let&apos;s mix, mingle, and make things happen – your
											next big opportunity might just be a handshake away!
										</Typography>
									</Box>
									<Box
										sx={{
											backgroundColor: "white",
											borderRadius: 4,
											padding: 4,
											boxShadow: "0px 4px 8px gray",
										}}
									>
										<Typography
											variant='h4'
											sx={{
												fontWeight: "bold",
												fontSize: 22,
												marginBottom: 2,
											}}
											className='text-purple-950'
										>
											Rise & Thrive (Professional Development)
										</Typography>
										<Typography variant='body1' sx={{ fontSize: 18 }}>
											Dive into an engaging professional development
											experience crafted for young professionals. Join us for
											interactive sessions, forward-thinking speakers, and
											hands-on workshops. Walk away not just inspired, but
											armed with real-world skills and tools to conquer your
											career goals!
										</Typography>
									</Box>
									<Box
										sx={{
											backgroundColor: "white",
											borderRadius: 4,
											padding: 4,
											boxShadow: "0px 4px 8px gray",
										}}
									>
										<Typography
											variant='h4'
											sx={{
												fontWeight: "bold",
												fontSize: 22,
												marginBottom: 2,
											}}
											className='text-purple-950'
										>
											Soar & Serve (Volunteerism)
										</Typography>
										<Typography variant='body1' sx={{ fontSize: 18 }}>
											Come collaborate with us for meaningful engagements
											where you can make a difference while forging new
											friendships. Discover the immense benefits of giving
											back, fostering personal growth, and contributing to the
											greater good. Let&apos;s come together, have fun, and
											create positive change in our community – because making
											a difference has never been this exciting!
										</Typography>
									</Box>
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