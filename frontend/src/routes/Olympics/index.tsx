import { Container, Box, CardMedia, Grid, Divider, Button, styled, Link, Typography, Paper } from '@mui/material';

const Olympics = () => {
	const Img = styled('img')({
		margin: 'auto',
		display: 'block',
		width: '100%',
		height: '100%',
		borderRadius: '4px',
		objectFit: 'cover',
		objectPosition: 'center',
	});

	return (
		<>
			<div className="h-screen w-screen overflow-x-hidden">
				<Container maxWidth={false} disableGutters
					sx={{
						background: '#0E2545'
					}}
				>
					<Grid
						sx={{ maxWidth: 1280, background: 'white' }}
						marginX={'auto'}
					>
						<div>
							<Box sx={{
								py: 8, textAlign: 'center',
							}}>

								<Grid xs={12} container>
									<Grid
										xs={12}
									>
										<Paper
											sx={{
												width: { xs: '100%', sm: '100%', md: '600px' },
												boxShadow: '2px 4px 8px black',
												marginX: 'auto'
											}}
										>
											<Img src="https://i.imgur.com/pynXg8J.png" />
										</Paper>
										<Paper
											sx={{
												width: { xs: '100%', sm: '100%', md: '600px' },
												boxShadow: '2px 4px 8px black',
												marginX: 'auto',
												marginY: '0.5vh'
											}}
										>
											<Img src="https://i.imgur.com/9gwRS4c.png" />
										</Paper>
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
												marginY: 3,
												marginBottom: 8,
												bgcolor: '#f3ce49',
												boxShadow: '2px 4px 6px black',
											}}
										>
											<Link href="https://business.lewisvillechamber.org/events/details/yp-olympics-30462?calendarMonth=2025-10-01"
												sx={{
													textDecoration: 'none',
													color: 'black',
												}}>
												Register Here
											</Link>
										</Button>
									</Grid>
								</Grid>
							</Box>
							<div className="flex flex-1 justify-end">
							</div>
						</div>
						<div className="bio-panel-container flex items-center justify-center space-x-12 overflow-x-auto">
						</div>
					</Grid>

				</Container >
			</div >
		</>
	);
};

export default Olympics;
