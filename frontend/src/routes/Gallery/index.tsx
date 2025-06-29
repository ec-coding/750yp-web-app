// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ContactUs from "../../components/ContactUs";
import { Container, Box, CardMedia, Grid } from '@mui/material';
import GalleryPhotos from './GalleryPhotos/GalleryPhotos';
// import EventPanel from "@/components/EventPanel";
// import { trpc } from "@/utils/trpc";

const Gallery = () => {

	return (
		<>
			<div className="h-screen w-screen overflow-x-hidden">
				<Container maxWidth={false} disableGutters
					sx={{
						background: '#0E2545',
						paddingTop: '5vh',
						paddingBottom: '5vh'
					}}
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
						<GalleryPhotos customProp={"https://i.imgur.com/Cpungs1.jpeg"} />
						<GalleryPhotos customProp={"https://i.imgur.com/HiZl3GG.jpeg"} />
						<GalleryPhotos customProp={"https://i.imgur.com/X2ruTUt.jpeg"} />
						<GalleryPhotos customProp={"https://i.imgur.com/M1bGxGi.jpeg"} />
						<GalleryPhotos customProp={"https://i.imgur.com/YBkMSE4.jpeg"} />
						<GalleryPhotos customProp={"https://i.imgur.com/UUm1JY9.jpeg"} />
						<GalleryPhotos customProp={"https://i.imgur.com/9sny6hU.jpeg"} />
						<GalleryPhotos customProp={"https://i.imgur.com/TYdaAEi.jpeg"} />
						<GalleryPhotos customProp={"https://i.imgur.com/TA0tdTI.jpeg"} />
						<GalleryPhotos customProp={"https://i.imgur.com/PEoS3yI.jpeg"} />
						<GalleryPhotos customProp={"https://i.imgur.com/VzXciUc.jpeg"} />
						<GalleryPhotos customProp={"https://i.imgur.com/KVEk6LU.jpeg"} />
					</Grid>
				</Container >
			</div >
		</>
	);
};

export default Gallery;
