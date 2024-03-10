// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ContactUs from "../../components/ContactUs";
import { Container, Box, CardMedia, Grid, Divider } from '@mui/material';
// import EventPanel from "@/components/EventPanel";
// import { trpc } from "@/utils/trpc";

const Events = () => {
	// const response = trpc.event.getAll.useQuery();
	// const [events, setEvents] = React.useState(response.data);

	// React.useEffect(() => {
	//   setEvents(response.data);
	// }, [response.data]);

	return (
		<>
			<div className="h-screen w-screen overflow-x-hidden">
				<Container maxWidth={false} disableGutters>
					<Grid className="bg-sky-200">
						<Grid
							container
							alignItems="center"
							padding={0}
							sx={{ maxWidth: 1280 }}
							marginX={'auto'}
							paddingY={5}
						>
							<Grid
								xs={12}
								sm={6}
								container
								alignItems="center"
								justifyContent="space-between"
								margin={0}
								paddingY={3}
							>
								<CardMedia
									component="img"
									image="https://i.imgur.com/ZVLTYe8.jpg"
									alt="750YP"
									className="hero-image"
									sx={{ boxShadow: '2px 4px 8px black' }}
								/>
							</Grid>

							<Grid
								xs={12}
								sm={6}
								alignItems="center"
								justifyContent="center"
								margin={0}
								padding={8}
								sx={{
									padding: { xs: 4, sm: 4, md: 8 }
								}}
							>
								<Box marginBottom={3}>
									<Typography
										variant="h4"
										sx={{ fontWeight: 'bold' }}
										className="text-purple-950"
									>
										Professional Mixers
									</Typography>
								</Box>
								<Box padding={0}>
									<Typography variant="body1" sx={{ fontSize: 22, marginY: 4 }}>
										Our events are designed to connect you with industry
										leaders, foster meaningful conversations, and provide
										insights that propel your career forward. Don&apos;t miss
										out on the opportunities that await – your next
										career-defining connection could be just around the corner!
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						className="text-4xl text-center font-bold my-10"
						sx={{ maxWidth: 1280 }}
						marginX={'auto'}
					>
						<Typography sx={{ fontSize: 18 }}></Typography>
						<Divider
							variant="middle"
							sx={{ height: '3px', width: '200px', my: 4, mx: 'auto' }}
						/>
					</Grid>

					<Grid
						className="space-y-16"
						sx={{ maxWidth: 1280 }}
						marginX={'auto'}
						marginBottom={5}
					>
						<div className="flex items-center w-3/4 bg-cyan-400 mx-auto py-4 px-7 rounded-md">
							{/* <div className='flex-1'>
                <Typography sx={{ fontWeight: "bold" }}>
                  Events ({events ? events.length : "error"} Results)
                </Typography>
              </div> */}
							<div className="flex flex-1 justify-end">
								<button className="bg-purple-950 text-white py-1 px-16 rounded-full focus:outline-none focus:ring focus:border-blue-300">
									Filter
								</button>
							</div>
						</div>
						<div className="bio-panel-container flex items-center justify-center space-x-12 overflow-x-auto">
							{/* {events?.map((event, index) => (
                <EventPanel event={event} key={index} />
              ))} */}
						</div>
						{/* <div className='bio-panel-container flex items-center justify-center space-x-12 overflow-x-auto'>
              <EventPanel />
              <EventPanel />
              <EventPanel />
            </div> */}
						<Typography
							variant="h6"
							className="my-10 flex items-center justify-center "
						>
							<button className="bg-purple-950 text-white py-1 px-16 rounded-full focus:outline-none focus:ring focus:border-blue-300">
								Load More
							</button>
						</Typography>
					</Grid>
				</Container>
			</div>
		</>
	);
};

export default Events;
