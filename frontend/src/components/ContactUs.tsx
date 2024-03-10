// Libraries & Frameworks ///////////////////////////////////////////////
import { Grid, Typography, Container, TextField, Button } from '@mui/material';

// Main Component ///////////////////////////////////////////////
const ContactUs = () => {
	// Render ///////////////////////////////////////////////////////////////
	return (
		<Container
			maxWidth={false}
			disableGutters
			sx={{ backgroundColor: '#bae6fd' }}
		>
			<Grid container py={4}
				sx={{
					justifyContent: 'space-between',
					width: {
						xs: '100%',
						sm: '640px',
						md: '768px',
						lg: '1024px',
						xl: '1280px'
					},
					margin: 'auto',
					paddingX: { xs: 3, sm: 3, md: 4, lg: 8 }
				}}
			>
				<Grid item xs={12} sx={{ marginBotton: 1 }}>
					<Typography
						variant="h4"
						color={'#3b0764'}
						sx={{
							fontWeight: '500',
						}}
					>
						Want to learn more? Get in touch!
					</Typography>
					<Typography variant="h6" sx={{ marginTop: 2, marginBottom: 4, fontWeight: '400' }}>
						At 750YP, we are here to help you grow and connect with like-minded
						individuals.
					</Typography>
				</Grid>
				<Grid item xs={12}
					sx={{
						paddingX: { xs: 0, sm: 0, md: 4, lg: 6 }
					}}
					
				>
					<Typography
						variant="h5"
						color={'#3b0764'}
						sx={{
							fontWeight: 'bold',
							marginBottom: 2,
						}}
					>
						Contact Info
					</Typography>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<TextField
								fullWidth
								label="First Name*"
								variant="outlined"
								sx={{ backgroundColor: 'white', borderRadius: 1 }}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								fullWidth
								label="Last Name*"
								variant="outlined"
								sx={{ backgroundColor: 'white', borderRadius: 1 }}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								fullWidth
								label="E-mail*"
								variant="outlined"
								sx={{ backgroundColor: 'white', borderRadius: 1 }}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								fullWidth
								label="Phone #"
								variant="outlined"
								sx={{ backgroundColor: 'white', borderRadius: 1 }}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								label="Message*"
								variant="outlined"
								multiline
								rows={4}
								sx={{ backgroundColor: 'white', borderRadius: 1 }}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sx={{ display: 'flex', justifyContent: 'center' }}
						>
							<Button
								variant="contained"
								sx={{
									backgroundColor: 'blue[900]',
									color: 'white',
									fontWeight: 'bold',
									padding: '10px 40px',
									borderRadius: '9999px',
								}}
							>
								Submit
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ContactUs;
