// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ContactUs from "../../components/ContactUs";
import { Container, Box, CardMedia, Grid, Divider } from '@mui/material';
// import EventPanel from "@/components/EventPanel";
// import { trpc } from "@/utils/trpc";

const Testimonials = () => {
	// const response = trpc.event.getAll.useQuery();
	// const [events, setEvents] = React.useState(response.data);

	// React.useEffect(() => {
	//   setEvents(response.data);
	// }, [response.data]);

    return (
		<>
			<div className="h-screen w-screen overflow-x-hidden">
				<Container maxWidth={false} disableGutters
				sx={{
					background: '#0E2545'
				}}
				>
					<Grid
						sx={{ maxWidth: 1280 }}
						marginX={'auto'}
					>
						<div>
							<Box sx={{
								py: 8, textAlign: 'center',
							}}>
								<Typography variant="h4" sx={{
									fontWeight: 'bold',
									mb: 4,
								}}>
									
								</Typography>
								{/* <Typography variant="h5">
									Please check back in 2025!
								</Typography> */}
							</Box>
							<div className="flex flex-1 justify-end">
							</div>
						</div>
						<div className="bio-panel-container flex items-center justify-center space-x-12 overflow-x-auto">
						</div>
					</Grid>
					<Box sx={{ backgroundColor: '#576B95' }}>
						<Container maxWidth="lg">
							<Grid container spacing={5}>
								<Grid item xs={12} paddingY={6}>
									<Grid item xs={12} sm={12}
										marginTop={2}
										marginBottom={6}
									>
										<Typography variant="h4" sx={{
											fontWeight: 'bold',
											textAlign: { xs: 'center', sm: 'center', md: 'center' },
											paddingX: { xs: 0, md: 2 },
											color: 'white',
											textShadow: '2px 2px 2px black',
										}}>
											Coming Soon
										</Typography>
									</Grid>
									<Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
										{/* topics */}
									</Box>
								</Grid>
							</Grid>
						</Container>
					</Box>
					<Grid
						className="text-4xl text-center font-bold my-10"
						sx={{ maxWidth: 1280 }}
						marginX={'auto'}
					>
						<Typography sx={{ fontSize: 18 }}></Typography>
					</Grid>
				</Container >
			</div >
		</>
	);
};

export default Testimonials;
