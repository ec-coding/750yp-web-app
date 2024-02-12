import { CardMedia, Grid } from '@mui/material';

const EventPhoto = () => {
	return (
		<Grid
			xs={12}
			sm={6}
			container
			alignItems="center"
			justifyContent="center"
			margin={0}
			padding={0}
		>
			<CardMedia
				component="img"
				image="https://i.imgur.com/cmsvQqd.png"
				alt=""
				sx={{ borderRadius: 2, width: 4 / 5 }}
			/>
		</Grid>
	);
};

export default EventPhoto;
