// Needs refactoring and better botton implementation and styling

// Libraries & Frameworks ///////////////////////////////////////////////
import { Container, Grid, Typography, Button, Paper, styled, useMediaQuery } from '@mui/material';

// Main Component ///////////////////////////////////////////////
const Footer = () => {
	const MobileWidthBreakpoint = useMediaQuery('(max-width: 600px)');
	const showElementBelow600px = useMediaQuery('(max-width: 600px)');

	const Img = styled('img')({
		margin: 'auto',
		display: 'block',
		width: '100%',
		height: '100%',
		borderRadius: '4px',
		objectFit: 'cover',
		objectPosition: 'center',
		background: 'none'
	});

	// Render ///////////////////////////////////////////////////////////////
	return (
		<Container
			maxWidth={false}
			disableGutters
			sx={{ py: 2, backgroundColor: 'grey.100' }}
		>
			<Grid
				container
				alignItems="center"
				spacing={2}
				sx={{
					justifyContent: 'space-between',
					width: {
						xs: '100%',
						sm: '640px',
						md: '768px',
						lg: '1024px',
						xl: '1280px'
					},
					margin: 'auto'
				}}
			>
				<Grid container item xs={12} sm={4} display="flex">
					<Grid xs={6} sm={4}>
						<Button href="/" sx={{
							p: 0,
							justifyContent: 'center', // Default value for medium and above breakpoints
							'@media (max-width: 600px)': { // xs breakpoint
								justifyContent: 'flex-start',
							},
							'@media (min-width: 601px) and (max-width: 960px)': { // sm breakpoint
								justifyContent: 'flex-start',
							},
						}}>
							<Paper sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
								<Img src="https://i.imgur.com/ICaBO54.png"
									alt="750YP"
									sx={{
										width: { xs: '70%', sm: '70%', md: '100%' },
										height: { xs: '70%', sm: '70%', md: '100%' },
										margin: { xs: 'left', sm: 'left', md: 'auto'}
									}}
								/>
							</Paper>

						</Button>
					</Grid>
					{showElementBelow600px && (
						<Grid item xs={6} sm={3}>
							<Typography
								variant="h6"
								sx={{ fontWeight: 'bold', color: 'primary.main', paddingX: '1vh' }}
							>
								Get Connected
							</Typography>
							<Grid container
								sx={{ gap: 2 }}
							>
								<Grid item
									style={{ width: 35 }}
								>
									<Button href="https://www.facebook.com" target="_blank"
										sx={{ padding: '0' }}
									>
										<Button href="https://www.instagram.com" target="_blank">
											<img
												src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png"
												alt="Instagram"
												style={{ width: 35 }}
											/>
										</Button>
									</Button>
								</Grid>
								<Grid item
									style={{ width: 35 }}
								>
									<Button href="https://www.instagram.com" target="_blank">
										<img
											src="https://static-00.iconduck.com/assets.00/social-instagram-icon-1024x1024-qshv5qmi.png"
											alt="Instagram"
											style={{ width: 35 }}
										/>
									</Button>
								</Grid>
								<Grid item
									style={{ width: 35 }}
								>
									<Button href="https://www.linkedin.com" target="_blank">
										<img
											src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
											alt="LinkedIn"
											style={{ width: 35 }}
										/>
									</Button>
								</Grid>
							</Grid>
						</Grid>
					)}

				</Grid>

				<Grid item xs={12} sm={8}>
					<Grid container spacing={2}>
						<Grid item xs={6} sm={3}>
							<Typography
								variant="h6"
								sx={{ fontWeight: 'bold', color: 'primary.main' }}
							>
								Company
							</Typography>
							<Button
								href="/AboutUs"
								sx={{ textTransform: 'none', color: 'black', display: 'block', paddingX: '2px' }}
							>
								About Us
							</Button>
							<Button
								href="/Events"
								sx={{ textTransform: 'none', color: 'black', display: 'block', paddingX: '2px' }}
							>
								Events
							</Button>
							<Button
								href="/ContactUs"
								sx={{ textTransform: 'none', color: 'black', display: 'block', paddingX: '2px' }}
							>
								Contact Us
							</Button>
						</Grid>

						<Grid item xs={6} sm={3}>
							<Typography
								variant="h6"
								sx={{ fontWeight: 'bold', color: 'primary.main' }}
							>
								Legal
							</Typography>
							<Button
								href="/PrivacyPolicy"
								sx={{ textTransform: 'none', color: 'black', display: 'block', paddingX: '2px' }}
							>
								Privacy Policy
							</Button>
							<Button
								href="/TermsAndConditions"
								sx={{ textTransform: 'none', color: 'black', display: 'block', paddingX: '2px' }}
							>
								Terms & Conditions
							</Button>
							<Button
								href="/TermsOfUse"
								sx={{ textTransform: 'none', color: 'black', display: 'block', paddingX: '2px' }}
							>
								Terms of Use
							</Button>
						</Grid>
						{MobileWidthBreakpoint ? null : (
							<Grid item xs={12} sm={5}
								sx={{
									justifyContent: 'center',
									alignItems: 'center',
									textAlign: 'center'
								}}
							>
								<Typography
									variant="h6"
									sx={{ fontWeight: 'bold', color: 'primary.main', paddingX: '1vh', textAlign: 'center' }}
								>
									Get Connected
								</Typography>
								<Grid container
									sx={{
										gap: 2,
										justifyContent: 'center',
										alignItems: 'Center'
									}}
								>
									<Grid item container
										sx={{
											gap: 2,
											justifyContent: 'center',
											alignItems: 'Center'
										}}
										style={{ width: 35 }}
									>
										<Button href="https://www.facebook.com" target="_blank"
											sx={{ padding: '0' }}
										>
											<img
												src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png"
												alt="Facebook"
												style={{ width: 35 }}
											/>
										</Button>
									</Grid>
									<Grid item container
										sx={{
											gap: 2,
											justifyContent: 'center',
											alignItems: 'Center'
										}}
										style={{ width: 35 }}
									>
										<Button href="https://www.instagram.com" target="_blank">
											<img
												src="https://static-00.iconduck.com/assets.00/social-instagram-icon-1024x1024-qshv5qmi.png"
												alt="Instagram"
												style={{ width: 35 }}
											/>
										</Button>
									</Grid>
									<Grid item container
										sx={{
											gap: 2,
											justifyContent: 'center',
											alignItems: 'Center'
										}}
										style={{ width: 35 }}
									>
										<Button href="https://www.linkedin.com" target="_blank">
											<img
												src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
												alt="LinkedIn"
												style={{ width: 35 }}
											/>
										</Button>
									</Grid>
								</Grid>
							</Grid>
						)}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Footer;