// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContactUs from '../../components/ContactUs';
import StaffProfiles from './StaffProfiles/StaffProfiles';
import { Container, Box, CardMedia, Grid } from '@mui/material';
// import styles from './AboutUs.module.css';

///////////////////////////////////////////////////////////////
// Grid layout needs to be reworked to be correctly responsive
///////////////////////////////////////////////////////////////

const AboutUs = () => {
	return (
		<>
			<div className="h-screen w-screen overflow-x-hidden">
				<Container maxWidth={false} disableGutters className="space-y-16">
					<Grid className="bg-sky-200">
						<Grid
							container
							alignItems="center"
							padding={0}
							sx={{ maxWidth: 1280 }}
							marginX={'auto'}
							paddingY={5}
						>
							<Grid
								xs={12}
								sm={6}
								container
								alignItems="center"
								justifyContent="space-between"
								margin={0}
								sx={{
									paddingY: { xs: 0, sm: 0, md: 3 }
								}}
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
									padding: { xs: 4, sm: 4, md: 6, lg: 8 }
								}}
							>
								<Box marginY={2}>
									<Typography
										variant="h4"
										sx={{ fontWeight: 'bold' }}
										color={'#3b0764'}
									>
										Our Mission
									</Typography>
								</Box>
								<Box padding={0}>
									<Typography variant="body1" sx={{ fontSize: 22 }}>
										750 YP is a new program of the Lewisville Area Chamber of
										Commerce that aims to gather young talent while developing
										the next generation of leaders. We offer a dynamic hub for
										young professionals dedicated to nurturing holistic
										development, bridging professional milestones and personal
										aspirations through meaningful connections and shared
										experiences.
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</Grid>

					<Grid sx={{ backgroundColor: '#FFECB3' }} marginX={'auto'}>
						<Box marginBottom={4}>
							<Typography
								variant="h4"
								sx={{ fontWeight: 'bold' }}
								textAlign='center'
								paddingTop={5}
							>
								Our Team
							</Typography>
						</Box>
						<Grid marginTop={4} marginBottom={6} paddingBottom={5}
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
									sm={2.4}
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<StaffProfiles customProp="lois" />
								</Grid>
								<Grid xs={12}
									sm={2.4}
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<StaffProfiles customProp="landon" />
								</Grid>
								<Grid xs={12}
									sm={2.4}
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<StaffProfiles customProp="nina" />
								</Grid>
								<Grid xs={12}
									sm={2.4}
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<StaffProfiles customProp="justus" />
								</Grid>
								<Grid xs={12}
									sm={2.4}
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<StaffProfiles customProp="joshua" />
								</Grid>
							</Grid>
							<Grid
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
								container
								marginX="auto"
							>
								<Grid xs={12}
									sm={1.65}
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<StaffProfiles customProp="kayla" />
								</Grid>
								<Grid xs={12}
									sm={1.65}
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<StaffProfiles customProp="davis" />
								</Grid>
								<Grid xs={12}
									sm={1.65}
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<StaffProfiles customProp="david" />
								</Grid>
								<Grid xs={12}
									sm={1.65}
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
							justifyContent: 'space-between',
							width: {
								xs: '100%',
								sm: '640px',
								md: '768px',
								lg: '1024px',
								xl: '1280px'
							},
							marginX: 'auto'
						}}
					>
						<Box marginY={5}>
							<Typography
								variant="h4"
								sx={{
									fontWeight: 'bold',
									color: 'purple',
									paddingX: { xs: 4, sm: 4, md: 8 }
								}}
							>
								Frequently Asked Questions
							</Typography>
						</Box>
						<Grid marginBottom={8}
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
								<Typography>
									Right now, it’s open to anyone regardless of their membership
									with the Lewisville chamber.
								</Typography>
							</div>
							<hr />
							<div>
								<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
									Is there a cost to join?
								</Typography>
								<Typography>
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
								<Typography>
									We wish we could host everyone, but the age cap for our group
									is 43 and under.
								</Typography>
							</div>
							<hr />
							<div>
								<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
									Do I have to live in Lewisville to join?
								</Typography>
								<Typography>
									Absolutely not. You can join us regardless of your location
									but most of our events will be held in the Lewisville, Flower
									Mound, and The Colony area.
								</Typography>
							</div>
							<hr />
							<div>
								<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
									How often will 750YP meet?
								</Typography>
								<Typography>
									We will host one mixer a month, one professional development
									event a quarter, and volunteer events once a quarter.
								</Typography>
							</div>
							<hr />
						</Grid>
					</Grid>
				</Container>
				<ContactUs />
			</div>
		</>
	);
};

export default AboutUs;