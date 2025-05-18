////////////////////////////////////////////////////////
// this is so dense and needs to be fully refactored
////////////////////////////////////////////////////////
// treeshake react parts
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, CardMedia, Grid, Modal, useMediaQuery } from '@mui/material';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	boxShadow: 24,

	//   bgcolor: 'background.paper',
	//   border: '2px solid #000',
	//   boxShadow: 24,
	//   p: 4,
	//   overflow: 'auto', // Enable scrolling
	//   maxHeight: '90dvh', // Set a maximum height if needed

	//   bgcolor: 'background.paper',
	//   border: '2px solid #000',
	//   boxShadow: 24,
	//   p: 4,
	//   overflow: 'auto', // Enable scrolling
	//   maxHeight: '90dvh', // Set a maximum height if needed
};

// MOVE THIS TO COMPONENTS FOLDER

export default function StaffProfiles({ customProp }: { customProp: string }) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const isSmOrBelow = useMediaQuery('(max-width: 600px)'); // or any breakpoint you consider as 'sm' or below

	let staff = {
		name: 'Default Name',
		title: 'Default Title',
		photo: 'Default Photo'
	};

	let modal = {
		photo: '',
		name: '',
		title: '',
		prof: '',
		music: '',
		food: '',
		hobbies: '',
		vacation: ''
	}

	if (customProp === 'lois') {
		staff.name = 'Lois Kim',
			staff.title = 'Co-Chair',
			staff.photo = 'https://i.imgur.com/DG6kbnm.png',
			modal.photo = staff.photo,
			modal.name = staff.name,
			modal.prof = "Financial Professional",
			modal.title = 'Co-Chair AKA Empress of Everything',
			modal.music = 'Everything but currently on a EDM phase.',
			modal.food = 'Anything Asian but I may be biased...',
			modal.hobbies = 'Volleyball, hanging with my dog, volunteering, and trying out new restaurants!',
			modal.vacation = 'Anything with a beach where I can just be a vegetable.'
	}

	if (customProp === 'landon') {
		staff.name = 'Landon Merigold',
			staff.title = 'Co-Chair',
			staff.photo = 'https://i.imgur.com/eaWWnM1.jpeg',
			modal.photo = staff.photo,
			modal.name = staff.name,
			modal.prof = "Loan Officer",
			modal.title = 'Co-Chair AKA Minister of Culture',
			modal.music = 'EDM and Country',
			modal.food = 'Chipotle or a Chicken Parm',
			modal.hobbies = 'Working Out, Golfing, Watching Sports',
			modal.vacation = 'Always up for a new adventure! My goal is to visit all 7 continents within my lifetime!'
	}

	if (customProp === 'nina') {
		staff.name = 'Nina Hernandez',
			staff.title = 'Treasurer',
			staff.photo = 'https://i.imgur.com/y4O6fj2.jpeg',
			modal.photo = staff.photo,
			modal.name = staff.name,
			modal.prof = "Director of Communications & Events",
			modal.title = 'Treasurer AKA Tea-EO',
			modal.music = 'Anything R&B',
			modal.food = 'WINGS!! Spicy & Crunchy, PLEASE!',
			modal.hobbies = 'I love going on long walks with my little family or finding anything to craft!',
			modal.vacation = 'Anywhere with a good view and great food!'
	}

	if (customProp === 'justus') {
		staff.name = 'Justus Carlile',
			staff.title = 'Event Coordinator',
			staff.photo = 'https://i.imgur.com/iGM7P8r.png',
			modal.photo = staff.photo,
			modal.name = staff.name,
			modal.prof = "Real Estate Broker & Small Business Owner",
			modal.title = 'Event Coordinator AKA Sheriff of Shindigs',
			modal.music = 'Electronic, Punk, Country, or Industrial/Metal.',
			modal.food = 'Italian. Pasta is life.',
			modal.hobbies = 'Gardening, travel, home improvement projects, and concerts.',
			modal.vacation = 'Svalbard, Norway. Northernmost inhabited city in the world, and a place where polar bears outnumber people!'
	}

	if (customProp === 'joshua') {
		staff.name = 'Josh Clark',
			staff.title = 'Volunteer Coordinator',
			staff.photo = 'https://i.imgur.com/DdUgdiJ.png',
			modal.photo = staff.photo,
			modal.name = staff.name,
			modal.prof = "Real Estate Agent",
			modal.title = 'Volunteer Coordinator AKA Clarity Champion',
			modal.music = '80\'\s New Wave',
			modal.food = 'Anything smothered in Hot Honey',
			modal.hobbies = 'Rock climbing and running',
			modal.vacation = 'My house, I hate traveling'
	}

	if (customProp === 'kayla') {
		staff.name = 'Kayla Baumann',
			staff.title = 'Secretary',
			staff.photo = 'https://i.imgur.com/vJomm5m.png',
			modal.photo = staff.photo,
			modal.name = staff.name,
			modal.prof = "Director of Community Engagement, Communities In Schools of North Texas",
			modal.title = 'Secretary AKA Connection Connoisseur',
			modal.music = 'Worship or Taylor Swift',
			modal.food = 'Pasta',
			modal.hobbies = 'Spending time with family & friends, puzzles, calligraphy, reading',
			modal.vacation = 'Great Smoky Mountains or Greece'
	}

	if (customProp === 'davis') {
		staff.name = 'Davis Perrone',
			staff.title = 'Engagement Coordinator',
			staff.photo = 'https://i.imgur.com/eYqPUSu.png',
			modal.photo = staff.photo,
			modal.name = staff.name,
			modal.prof = "Business Development Officer",
			modal.title = 'Social Media Co-Chair AKA Digital Dynamo',
			modal.music = 'Rap and Metal',
			modal.food = 'Buffalo Wings',
			modal.hobbies = 'Golf and Weightlifting',
			modal.vacation = 'I would love to go to Australia someday'
	}

	if (customProp === 'kassandra') {
		staff.name = 'Kassandra Nordhoff',
			staff.title = 'Social Media Coordinator',
			staff.photo = 'https://i.imgur.com/t4SWRns.png',
			modal.photo = staff.photo,
			modal.name = staff.name,
			modal.prof = "Business Development Executive",
			modal.title = 'Social Media Co-Chair AKA Social Media Sith Lord',
			modal.music = 'Classic Rock',
			modal.food = 'Seafood',
			modal.hobbies = 'Thrift Shopping and Visiting new restaurants',
			modal.vacation = 'California or any “Disney” park place'
	}

	if (customProp === 'paige') {
		staff.name = 'Paige Ackerman',
			staff.title = 'Network Navigator',
			staff.photo = 'https://i.imgur.com/hL8iQJA.png',
			modal.photo = staff.photo,
			modal.name = staff.name,
			modal.prof = "Insurance Broker",
			modal.title = 'Network Navigator',
			modal.music = 'Pop, Country',
			modal.food = 'Sushi',
			modal.hobbies = 'Traveling, Baking, and Organizing',
			modal.vacation = 'Switzerland'
	}

	if (customProp === 'rachel') {
		staff.name = 'Rachel Grunn',
			staff.title = 'Engagement Coordinator',
			staff.photo = 'https://i.imgur.com/Rm5reBY.jpeg',
			modal.photo = staff.photo,
			modal.name = staff.name,
			modal.prof = "Real Estate Advisor",
			modal.title = 'Engagement Coordinator AKA Facilitator of First Impressions',
			modal.music = 'Neo-Soul & R&B Fusion',
			modal.food = 'Sushi',
			modal.hobbies = 'Horseback Riding',
			modal.vacation = 'Okinawa, Japan'
	}

	if (customProp === 'lake') {
		staff.name = 'Lake Finninger',
			staff.title = 'Event Coordinator',
			staff.photo = 'https://i.imgur.com/NYDBqDA.jpeg',
			modal.photo = staff.photo,
			modal.name = staff.name,
			modal.prof = "Insurance Broker",
			modal.title = 'Event Coordinator',
			modal.music = 'Country & Blues',
			modal.food = 'Mediterranean or a hearty sub',
			modal.hobbies = 'Family, friends and golf with a yearly skydive',
			modal.vacation = 'Whistler in the Winter but honestly anywhere outside of the state of Texas. I love seeing new places and being able to meet as many people as possible!'
	}

	// if (customProp === 'edwin') {
	// 	staff.name = 'Edwin Choi',
	// 		staff.title = 'Software Sovereign',
	// 		staff.photo = 'https://i.imgur.com/7Lvsys0.jpg',
	// 		modal.photo = staff.photo,
	// 		modal.name = staff.name,
	// 		modal.prof = "Web Developer & Software Engineer",
	// 		modal.title = 'Website Tech Lead AKA Software Sovereign',
	// 		modal.music = 'Anything that tells a good story',
	// 		modal.food = 'Snow Crab',
	// 		modal.hobbies = 'Reading, Prop Design, and Voice Acting',
	// 		modal.vacation = 'Singapore or Liechtenstein'
	// }

	return (
		<Grid item
			xs={12}
			md={3}
			lg={3.25}
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Button
				onClick={handleOpen}
				style={{
					color: 'inherit',
					textDecoration: 'none',
					textTransform: 'none',
				}}
			>
				<Box className="bio-panel"
					marginY={2}
					sx={{
						flex: 'initial'
					}}
				>
					<Grid>
						<Grid
							sx={{
								width: 250,
								height: 250,
								borderRadius: '50%',
								overflow: 'hidden',
								border: '4px solid white'
							}}
						>
							<CardMedia
								component="img"
								image={staff.photo}
								alt="750YP"
								sx={{
									width: '100%', // Full width
									height: '100%', // Full height
									objectFit: 'cover', // Cover the container with the image while maintaining aspect ratio
								}}
							/>
						</Grid>
					</Grid>
					<Grid>
						<Typography
							variant="h6"
							sx={{ fontWeight: 'bold' }}
							marginTop={2}
							color={'white'}
							className="text-xl text-center font-bold">{staff.name}
						</Typography>
						<Typography
							variant="body1"
							sx={{ color: 'white', fontSize: '18px' }}
							marginY={0}
							className="text-base text-center font-bold">{staff.title}
						</Typography>
					</Grid>
				</Box>
			</Button>
			<Modal
				open={!isSmOrBelow && open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Grid
						container
						alignItems="center"
						justifyContent="center"
						sx={{
							border: '4px solid white',
							borderRadius: '5px',
							backgroundColor: 'white',
							minWidth: '1000px',
							minHeight: '350px',
						}}
					>
						<Grid
							xs={12}
							sm={4}
							container
							alignItems="center"
							justifyContent="center"
						>
							<Grid
								sx={{
									width: 275,
									height: 275,
									borderRadius: '50%',
									overflow: 'hidden',
									border: '4px solid white'
								}}
							>
								<CardMedia
									component="img"
									image={modal.photo}
									alt="750YP"
									sx={{
										width: '100%', // Full width
										height: '100%', // Full height
										objectFit: 'cover', // Cover the container with the image while maintaining aspect ratio
									}}
								/>
							</Grid>
						</Grid>

						<Grid xs={12} sm={8} margin={0} padding={0}>
							<Box paddingY={4} sx={{ backgroundColor: 'white' }}>
								<Typography
									variant="h5"
									sx={{ fontWeight: 'bold' }}
									marginBottom={1}
									paddingY={0.5}
									paddingX={3}
								>
									About Me
								</Typography>
								<Box
									paddingX={3}
								>
									<Typography variant="body1" sx={{ fontSize: 18 }}>
										<span style={{ fontWeight: 'bold' }}>Name:</span>{' '}
										{modal.name}
									</Typography>
									<Typography variant="body1" sx={{ fontSize: 18 }}>
										<span style={{ fontWeight: 'bold' }}>Profession:</span>{' '}
										{modal.prof}
									</Typography>
									<Typography variant="body1" sx={{ fontSize: 18 }}>
										<span style={{ fontWeight: 'bold' }}>YP Title:</span>{' '}
										{modal.title}
									</Typography>
								</Box>
								<Box
									marginY={2}
									paddingX={3}
								>
									<hr />
								</Box>
								<Box paddingX={3}>
									<Typography variant="body1" sx={{ fontSize: 18 }}>
										<span style={{ fontWeight: 'bold' }}>
											Favorite Music:
										</span>{' '}
										{modal.music}
									</Typography>
									<Typography variant="body1" sx={{ fontSize: 18 }}>
										<span style={{ fontWeight: 'bold' }}>
											Favorite Food:</span>{' '}
										{modal.food}
									</Typography>
									<Typography variant="body1" sx={{ fontSize: 18 }}>
										<span style={{ fontWeight: 'bold' }}>
											Hobbies:</span>{' '}
										{modal.hobbies}
									</Typography>
									<Typography variant="body1" sx={{ fontSize: 18 }}>
										<span style={{ fontWeight: 'bold' }}>
											Top Vacation Spot:</span>{' '}
										{modal.vacation}
									</Typography>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</Grid>
	);

	return null;
}