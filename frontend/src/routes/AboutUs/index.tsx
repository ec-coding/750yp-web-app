// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContactUs from '../../components/ContactUs';
import StaffProfiles from './StaffProfiles/StaffProfiles';
import { Container, Box, CardMedia, Grid } from '@mui/material';
import Values from '../../components/Values';
// import styles from './AboutUs.module.css';
import Collaboration from '../../img/Collaboration.png';
import Authenticity from '../../img/Authenticity.png';
import Professionalism from '../../img/Professionalism.png';
import GrowthMindset from '../../img/Growth Mindset.png';
import ServantLeadership from '../../img/Servant Leadership.png';
///////////////////////////////////////////////////////////////
// Grid layout needs to be reworked to be correctly responsive
///////////////////////////////////////////////////////////////
import Link from '@mui/material/Link';

const AboutUs = () => {
	return (
		<>
			<div className="h-screen w-screen overflow-x-hidden">
				<Container maxWidth={false} disableGutters>
					<Grid sx={{
						background: '#0E2545'
					}}>
						<Grid
							container
							alignItems="center"
							padding={0}
							sx={{ maxWidth: 1280 }}
							marginX={'auto'}
							paddingY={8}
						>
							<Grid
								xs={12}
								sm={6}
								container
								alignItems="center"
								justifyContent="space-between"
								margin={0}
								paddingBottom={4}
							>
								<CardMedia
									component="img"
									image="https://i.imgur.com/Cpungs1.jpg"
									alt="750YP"
									className="hero-image"
									sx={{
										boxShadow: '2px 4px 12px black'
									}}
								/>
							</Grid>
							<Grid
								xs={12}
								sm={6}
								alignItems="center"
								justifyContent="center"
								margin={0}
								sx={{
									paddingLeft: { xs: 4, sm: 4, md: 6, lg: 8 },
									paddingRight: { xs: 4, sm: 4, md: 2, lg: 2 }
								}}
							>
								<Box marginY={2}>
									<Typography
										variant="h4"
										sx={{
											fontWeight: 'bold',
											marginTop: { xs: 6, sm: 4, md: 0, lg: 0 }
										}}
										color={'white'}
									>
										Our Mission
									</Typography>
								</Box>
								<Box paddingBottom={4}>
									<Typography variant="body1" sx={{ fontSize: 22, color: 'white' }}>
										750 YP is a new program of the <Link
											href="https://business.lewisvillechamber.org/events/"
											color="inherit"
											fontWeight="bold"
											underline="none"
											sx={{
												color: 'tan',
												'&:hover': {
													color: 'lightYellow', // Change to your desired hover color
												},
												'&:active': {
													color: 'lightSkyBlue', // Change to your desired active color
												},
											}}>
											Lewisville Area Chamber of Commerce
										</Link> that aims to gather young talent while developing the next generation of leaders.
										We offer a dynamic hub for young professionals dedicated to nurturing holistic development,
										bridging professional milestones and personal aspirations through meaningful connections
										and shared experiences.
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</Grid>

					{/* VALUES */}
					<Box sx={{ backgroundColor: 'white', paddingBottom: 6 }}>
						<Container maxWidth="lg">
							<Grid container spacing={5}>
								<Grid item xs={12}>
									<Grid item xs={12}
										marginBottom={4}

									>
										<Typography variant="h4" sx={{
											fontWeight: 'bold',
											textAlign: { xs: 'center', sm: 'center', md: 'center' },
											paddingX: { xs: 0, md: 2 },
										}}>
											Our Values
										</Typography>
									</Grid>
									<Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
										<Values
											name="1. Collaboration"
											img="https://i.imgur.com/Fh7bzqD.png"
											desc="We will foster a community that understands different perspectives so that we can accomplish more together."
										/>
										<Values
											name="2. Authenticity"
											img="https://i.imgur.com/AJKIlms.png"
											desc="We will promote genuine connections and trust within our community."
										/>
										<Values
											name="3. Professonalism"
											img="https://i.imgur.com/mwZsxnO.png"
											desc="We will conduct ourselves with integrity, expertise, respect, and excellence."
										/>
										<Values
											name="4. Growth Mindset"
											img="https://i.imgur.com/E3EsRUZ.png"
											desc="We will encourage learning, resilience, and innovation with an optimistic attitude."
										/>
										<Values
											name="5. Servant Leadership"
											img="https://i.imgur.com/39hmeCI.png"
											desc="We will emphasize humility and empathy, with a focus on serving the needs of others."
										/>
									</Box>
								</Grid>
							</Grid>
						</Container>
					</Box >

					<Grid sx={{ backgroundColor: '#0E2545' }} marginX={'auto'}>
						<Box >
							<Typography
								variant="h4"
								sx={{ fontWeight: 'bold', color: 'white' }}
								textAlign='center'
								paddingTop={5}
							>
								Our Team
							</Typography>
						</Box>
						<Grid marginTop={4} paddingBottom={5}
						>
							<Grid
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									maxWidth: '1280px'
								}}
								container
								marginX="auto"
							>
								<Grid xs={12}
									sm={2.75}
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<StaffProfiles customProp="lois" />
								</Grid>
								<Grid xs={12}
									sm={2.75}
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<StaffProfiles customProp="landon" />
								</Grid>
								<Grid xs={12}
									sm={2.75}
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<StaffProfiles customProp="nina" />
								</Grid>
								<Grid xs={12}
									sm={2.75}
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<StaffProfiles customProp="justus" />
								</Grid>
							</Grid>
							<Grid
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									maxWidth: '1280px'
								}}
								container
								marginX="auto"
							>
								<Grid xs={12}
									sm={2.75}
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<StaffProfiles customProp="joshua" />
								</Grid>
								<Grid xs={12}
									sm={2.75}
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<StaffProfiles customProp="kayla" />
								</Grid>
								<Grid xs={12}
									sm={2.75}
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<StaffProfiles customProp="davis" />
								</Grid>
								<Grid xs={12}
									sm={2.75}
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<StaffProfiles customProp="kassandra" />
								</Grid>

							</Grid>
						</Grid>
					</Grid>
					{/* <hr /> */}
					<Grid
						sx={{
							background: 'lightGray'
						}}
					>
						<Grid
							sx={{
								justifyContent: 'space-between',
								width: {
									xs: '100%',
									sm: '640px',
									md: '768px',
									lg: '1024px',
									xl: '1280px'
								},
								marginX: 'auto',
								paddingY: 8
							}}
						>
							<Box>
								<Typography
									variant="h4"
									sx={{
										fontWeight: 'bold',
										color: 'purple',
										paddingX: { xs: 4, sm: 4, md: 8 },
										marginBottom: 5
									}}
								>
									Frequently Asked Questions
								</Typography>
							</Box>
							<Grid
								sx={{
									'& > :not(style) + :not(style)': {
										marginTop: '1.5rem', // Adjust as needed for space between child elements
									},
									paddingX: { xs: 5, sm: 5, md: 8 }
								}}
							>
								<div>
									<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
										Can anyone join?
									</Typography>
									<Typography sx={{ marginTop: '5px', fontSize: '18px' }}>
										Right now, it’s open to anyone regardless of their membership
										with the Lewisville chamber.
									</Typography>
								</div>
								<hr />
								<div>
									<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
										Is there a cost to join?
									</Typography>
									<Typography sx={{ marginTop: '5px', fontSize: '18px' }}>
										It is FREE to join so come check us out! We also highly
										encourage membership with the chamber to really get the best
										ROI for your time.
									</Typography>
								</div>
								<hr />
								<div>
									<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
										Who is considered a “young professional”?
									</Typography>
									<Typography sx={{ marginTop: '5px', fontSize: '18px' }}>
										We wish we could host everyone, but the age cap for our group
										is 43 and under.
									</Typography>
								</div>
								<hr />
								<div>
									<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
										Do I have to live in Lewisville to join?
									</Typography>
									<Typography sx={{ marginTop: '5px', fontSize: '18px' }}>
										Not at all! You can join us regardless of your location
										but most of our events will be held in the Lewisville, Flower
										Mound, and The Colony area.
									</Typography>
								</div>
								<hr />
								<div>
									<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
										How often will 750YP meet?
									</Typography>
									<Typography sx={{ marginTop: '5px', fontSize: '18px' }}>
										We will host one mixer a month, one professional development
										event a quarter, and volunteer events once a quarter.
									</Typography>
								</div>

							</Grid>
						</Grid>
					</Grid>
				</Container>
				<ContactUs />
			</div>
		</>
	);
};

export default AboutUs;