// Libraries & Frameworks ///////////////////////////////////////////////
import { React, FormEvent, useRef, useState } from 'react';
import { Grid, Typography, Container, TextField, Button, Snackbar } from '@mui/material';
import emailjs from '@emailjs/browser';

// Main Component ///////////////////////////////////////////////
const ContactUs = () => {
	// Render ///////////////////////////////////////////////////////////////
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleClose = (event: React.SyntheticEvent<Element, Event>, reason: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsSubmitted(false);
    };

	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: FormEvent<HTMLFormElement>) => {

		e.preventDefault();

		if (form.current) {
			emailjs
				.sendForm('service_sygfv7f', 'template_lmj84tb', form.current, {
					publicKey: 'E_dnRpULSYOobP5OU',
				})
				.then(
					() => {
						e.preventDefault();
						setIsSubmitted(true);
						console.log('SUCCESS!');
					},
					(error) => {
						console.log('FAILED...', error.text);
					},
				);
		}
	};

	return (
		<Container
			maxWidth={false}
			disableGutters
			sx={{ backgroundColor: '#bae6fd' }}
		>
			<form ref={form} onSubmit={sendEmail} >
				<Grid container py={7}
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
								fontWeight: '600',
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
									name="firstName"
									sx={{ backgroundColor: 'white', borderRadius: 1 }}
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextField
									fullWidth
									label="Last Name*"
									variant="outlined"
									name="lastName"
									sx={{ backgroundColor: 'white', borderRadius: 1 }}
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextField
									fullWidth
									label="E-mail*"
									variant="outlined"
									name="email"
									sx={{ backgroundColor: 'white', borderRadius: 1 }}
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextField
									fullWidth
									label="Phone #"
									variant="outlined"
									sx={{ backgroundColor: 'white', borderRadius: 1 }}
									name="phone"
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
									name="message"
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
									type="submit"  // Ensure the button triggers form submission
								>
									Submit
								</Button>
								<Snackbar
									open={isSubmitted}
									autoHideDuration={6000}  // Adjust as needed
									onClose={handleClose}
									message="Contact form submitted successfully!"
								// You can customize the appearance of the Snackbar here
								// For example, you can add an action button or additional styling
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</Container>
	);
};

export default ContactUs;