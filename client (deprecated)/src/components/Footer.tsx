// Libraries & Frameworks ///////////////////////////////////////////////
import { Container, Grid, Typography, Button, Link } from '@mui/material';

// Main Component ///////////////////////////////////////////////
const Footer = () => {
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
				sx={{ maxWidth: 1280, mx: 'auto', py: 2 }}
			>
				<Grid item xs={12} sm={4} display="flex" justifyContent="center">
					<Button component="a" href="/" sx={{ p: 0 }}>
						<img
							src="https://i.imgur.com/ICaBO54.png"
							alt="750YP"
							style={{ width: '40%' }}
						/>
					</Button>
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
								sx={{ textTransform: 'none', color: 'black', display: 'block' }}
							>
								About Us
							</Button>
							<Button
								href="/Events"
								sx={{ textTransform: 'none', color: 'black', display: 'block' }}
							>
								Events
							</Button>
							<Button
								href="/ContactUs"
								sx={{ textTransform: 'none', color: 'black', display: 'block' }}
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
								sx={{ textTransform: 'none', color: 'black', display: 'block' }}
							>
								Privacy Policy
							</Button>
							<Button
								href="/TermsAndConditions"
								sx={{ textTransform: 'none', color: 'black', display: 'block' }}
							>
								Terms & Conditions
							</Button>
							<Button
								href="/TermsOfUse"
								sx={{ textTransform: 'none', color: 'black', display: 'block' }}
							>
								Terms of Use
							</Button>
						</Grid>

						<Grid item xs={12} sm={6}>
							<Typography
								variant="h6"
								sx={{ fontWeight: 'bold', color: 'primary.main' }}
							>
								Get Connected
							</Typography>
							<Grid container spacing={1}>
								<Grid item>
									<Button
										component="a"
										href="https://www.facebook.com"
										target="_blank"
									>
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png"
											alt="Facebook"
											style={{ width: 35 }}
										/>
									</Button>
								</Grid>
								<Grid item>
									<Button
										component="a"
										href="https://www.instagram.com"
										target="_blank"
									>
										<img
											src="https://static-00.iconduck.com/assets.00/social-instagram-icon-1024x1024-qshv5qmi.png"
											alt="Instagram"
											style={{ width: 35 }}
										/>
									</Button>
								</Grid>
								<Grid item>
									<Button
										component="a"
										href="https://www.linkedin.com"
										target="_blank"
									>
										<img
											src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
											alt="LinkedIn"
											style={{ width: 35 }}
										/>
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Footer;
