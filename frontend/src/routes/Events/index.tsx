import Typography from '@mui/material/Typography';
import { Container, Box, CardMedia, Grid, useMediaQuery } from '@mui/material';
import ContactUs from '../../components/ContactUs';
import EventRotation from '../../components/EventRotation';

const Events = () => {
	// const response = trpc.event.getAll.useQuery();
	// const [events, setEvents] = React.useState(response.data);
	const MobileWidthBreakpoint = useMediaQuery('(max-width: 600px)');
	// React.useEffect(() => {
	//   setEvents(response.data);
	// }, [response.data]);


	return (
		<>
			<div className="h-screen w-screen overflow-x-hidden">
				<Container maxWidth={false} disableGutters>
					<Grid
						sx={{ maxWidth: 1280 }}
						marginX={'auto'}
					>
						<div>
							<Box sx={{
								py: 8, textAlign: 'center',
								paddingX: { xs: 2 }
							}}>
								<Typography variant="h4" sx={{
									fontWeight: 'bold',
									mb: 4,
								}}>
									Our Upcoming Events
								</Typography>
								<EventRotation />
							</Box>
							<div className="flex flex-1 justify-end">
							</div>
						</div>
						<div className="bio-panel-container flex items-center justify-center space-x-12 overflow-x-auto">
						</div>
					</Grid>
					<Box sx={{ backgroundColor: '#576B95' }}>
						<Container maxWidth="lg">
							<Grid container spacing={5}>
								<Grid item xs={12} paddingY={6}>
									<Grid item xs={12} sm={12}
										marginTop={2}
										marginBottom={6}
									>
										<Typography variant="h4" sx={{
											fontWeight: 'bold',
											textAlign: { xs: 'center', sm: 'center', md: 'center' },
											paddingX: { xs: 0, md: 2 },
											color: 'white',
											textShadow: '2px 2px 2px black',
										}}>
											What types of events does 750YP host?
										</Typography>
									</Grid>
									<Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
										{/* topics */}
										<Grid container
											sx={{
												boxShadow: '2px 4px 12px black',
											}}
										>
											<Grid lg={7} container alignContent="center"
												sx={{
													backgroundColor: "white",
													// borderRadius: 4,
													padding: 4,
													boxShadow: "0px 4px 8px gray",
												}}
											>
												<Typography
													variant='h4'
													sx={{
														fontWeight: "bold",
														marginBottom: 4,
													}}
													className='text-purple-950'
												>
													Sip & Strive <br /> (Mixers)
												</Typography>
												<Typography variant='body1' sx={{ fontSize: 20 }}>
													Join us for an exhilarating evening of connections and
													collaborations at our vibrant networking mixer! Elevate
													your business game, make meaningful connections, and
													enjoy the dynamic energy of like-minded individuals.
													Let&apos;s mix, mingle, and make things happen – your
													next big opportunity might just be a handshake away!
												</Typography>
											</Grid>
											<Grid lg={5}>
												<CardMedia
													component='img'
													image='https://i.imgur.com/ZVLTYe8.jpg'
													alt='750YP'
													sx={{
														height: "400px",
													}}
												/>
											</Grid>
										</Grid>
										<Grid container
											sx={{
												boxShadow: '2px 4px 12px black',
											}}
										>
											<Grid lg={7} container alignContent="center"
												sx={{
													backgroundColor: "white",
													// borderRadius: 4,
													padding: 4,
													boxShadow: "0px 4px 8px gray",
												}}
											>
												<Typography
													variant='h4'
													sx={{
														fontWeight: "bold",
														marginBottom: 4,
													}}
													className='text-purple-950'
												>
													Rise & Thrive <br />(Professional Development)
												</Typography>
												<Typography variant='body1' sx={{ fontSize: 20 }}>
													Dive into an engaging professional development
													experience crafted for young professionals. Join us for
													interactive sessions, forward-thinking speakers, and
													hands-on workshops. Walk away not just inspired, but
													armed with real-world skills and tools to conquer your
													career goals!
												</Typography>
											</Grid>
											<Grid lg={5}>
												<CardMedia
													component='img'
													image='https://i.imgur.com/8FQbRqu.jpg'
													alt='750YP'
													sx={{
														height: "400px",
													}}
												/>
											</Grid>
										</Grid>
										<Grid container
											sx={{
												boxShadow: '2px 4px 12px black',
											}}
										>
											<Grid lg={7} container alignContent="center"
												sx={{
													backgroundColor: "white",
													// borderRadius: 4,
													padding: 4,
													boxShadow: "0px 4px 8px gray",
												}}
											>
												<Typography
													variant='h4'
													sx={{
														fontWeight: "bold",
														marginBottom: 4,
													}}
													className='text-purple-950'
												>
													Soar & Serve <br /> (Volunteerism)
												</Typography>
												<Typography variant='body1' sx={{ fontSize: 20 }}>
													Come collaborate with us for meaningful engagements
													where you can make a difference while forging new
													friendships. Discover the immense benefits of giving
													back, fostering personal growth, and contributing to the
													greater good. Let&apos;s come together, have fun, and
													create positive change in our community – because making
													a difference has never been this exciting!
												</Typography>
											</Grid>
											<Grid lg={5}>
												<CardMedia
													component='img'
													image='https://i.imgur.com/9H4NnDg.jpg'
													alt='750YP'
													sx={{
														height: "400px",
													}}
												/>
											</Grid>
										</Grid>
									</Box>
								</Grid>
							</Grid>
						</Container>
					</Box>
					<Grid
						className="text-4xl text-center font-bold my-10"
						sx={{ maxWidth: 1280 }}
						marginX={'auto'}
					>
						<Typography sx={{ fontSize: 18 }}></Typography>
					</Grid>
				</Container >
				<ContactUs />
			</div >
		</>
	);
};

export default Events;