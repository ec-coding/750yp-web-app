// refactor this

import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

// stop using any types for prop validation lol
const EventPanel = (event: { event: any }) => {
	const date = event.event.start_time.split(' ');

	return (
		<>
			<Box className="bg-gray-200 rounded-lg">
				<Grid xs={12} sm={6} container>
					<div className="flex-initial bio-panel space-y-4 p-3">
						<div className="w-80 h-80 rounded-lg overflow-hidden">
							{/* <img
								src={event.event.banner}
								alt="Your Image"
								className="w-full h-full object-cover"
							/> */}
						</div>
						<div className="bg-white mx-auto flex flex-col p-5 rounded-lg">
							<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
								{event.event.name}
							</Typography>
							<Typography>{event.event.description}</Typography>
							<Typography>Date: {date[0]}</Typography>
							<Typography>Time: {date[1]}</Typography>
							<Grid container className="space-x-10">
								<Typography>Attending</Typography>
								<Typography>Cost</Typography>
							</Grid>
						</div>
					</div>
				</Grid>
			</Box>
		</>
	);
};

export default EventPanel;
