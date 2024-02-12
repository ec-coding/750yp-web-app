import { useState } from 'react';
import { trpc } from '@/utils/trpc';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	bottom: 0,
	left: 0,
	whiteSpace: 'nowrap',
	width: 1,
});

export default function EventForm() {
	const [name, setName] = useState('hi');
	const [description, setDescription] = useState('');
	const [date, setDate] = useState('2023-01-01');
	const [start_time, setStart] = useState('00:00');
	const [end_time, setEnd] = useState('00:00');
	const [banner, setBanner] = useState(null);
	const [selectedFile, setSelectedFile] = useState(null);
	const [loading, setLoading] = useState(false);

	const mutation = trpc.event.create.useMutation(); // Initialize the mutation
	const imageMutation = trpc.image.upload.useMutation(); // Initialize the mutation

	const handleSubmit = () => {
		const eventData = {
			name: name || '', // Use default value if name is falsy
			description: description || '', // Use default value if description is falsy
			date: date || '', // Use default value if date is falsy
			start_time: start_time || '', // Use default value if start_time is falsy
			end_time: end_time || '', // Use default value if end_time is falsy
			banner: banner || '', // Use default value if banner is falsy
		};

		const formData = new FormData();
		formData.append('banner', banner as any);

		console.log(formData);
		// Trigger the mutation
		mutation.mutate(eventData);
		if (mutation.isSuccess) {
			console.log('success');
		} else {
			console.log('fail');
		}
		//imageMutation.mutate(banner);
	};

	// Handle file select
	const handleFileChange = (e: any) => {
		console.log(e.target.files[0]);
		const file = e.target.files[0]; // Get the first file from the list of selected files
		if (file) {
			setBanner(file); // Store the File object in the state
		}
	};

	return (
		<Container
			style={{ textAlign: 'center', maxHeight: 'inherit' }}
			className="px-0"
		>
			<Grid className="bg-sky-200 text-center my-2 py-2">
				<Typography variant="h5" sx={{ fontWeight: 'bold' }}>
					Create an Event
				</Typography>
			</Grid>
			<Grid style={{ marginTop: '16px' }} className="w-1/2 mx-auto">
				<TextField
					variant="outlined"
					fullWidth
					name="name"
					margin="normal"
					label="Event Name"
					placeholder="Event Name"
				/>

				<TextField
					variant="outlined"
					fullWidth
					type="date"
					name="date"
					margin="normal"
					label="Date"
					defaultValue={date}
					onChange={(e) => setDate(e.target.value)}
				/>
				<Grid container>
					<Grid xs={12} sm={6}>
						<TextField
							label="Start Time"
							type="time"
							variant="outlined"
							fullWidth
							name="startTime"
							margin="normal"
							defaultValue={start_time}
							onChange={(e) => setStart(e.target.value)}
						/>
					</Grid>
					<Grid xs={12} sm={6}>
						<TextField
							label="End Time"
							type="time"
							variant="outlined"
							fullWidth
							name="endTime"
							margin="normal"
							defaultValue={end_time}
							onChange={(e) => setEnd(e.target.value)}
						/>
					</Grid>
				</Grid>

				<Button
					className="my-5"
					component="label"
					variant="contained"
					startIcon={<CloudUploadIcon />}
				>
					Upload file
					<VisuallyHiddenInput
						onChange={(e) => handleFileChange(e)}
						accept=".png, .jpg"
						type="file"
					/>
				</Button>
				<span>{banner}</span>

				<TextField
					id="description"
					label="Description"
					multiline
					fullWidth
					rows={8}
					margin="normal"
				/>
				{loading == false ? (
					<Button className="my-5" component="label" variant="contained">
						Submit
						<VisuallyHiddenInput type="submit" onClick={() => handleSubmit()} />
					</Button>
				) : (
					<Button className="my-5" disabled variant="outlined">
						Submit
					</Button>
				)}
			</Grid>
		</Container>
	);
}
