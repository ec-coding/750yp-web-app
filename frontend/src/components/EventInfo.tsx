// needs refactor

import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

const EventInfo = () => {
	return (
		<Grid
			xs={12}
			sm={6}
			alignItems="center"
			justifyContent="center"
			margin={0}
			padding={0}
		>
			<Box sx={{ border: '2px solid black', width: 4 / 5 }} padding={4}>
				<Typography variant="body1" sx={{ fontSize: 18 }}>
					Event Info
				</Typography>
			</Box>
			<Box className="space-x-4 my-10">
				<button className="bg-yellow-400 font-bold py-2 px-20 rounded-full focus:outline-none focus:ring focus:border-blue-300">
					RSVP
				</button>
				<button className="bg-cyan-300 font-bold py-2 px-20 rounded-full focus:outline-none focus:ring focus:border-blue-300">
					Share
				</button>
			</Box>
		</Grid>
	);
};

export default EventInfo;
