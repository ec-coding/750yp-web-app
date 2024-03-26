
import { useState } from 'react';
import {
	AppBar,
	Typography,
	Button,
	Container,
	CardMedia,
	Grid,
} from '@mui/material';
// import Link from 'next/link';
import { Link } from 'react-router-dom';

export default function AdminBar({ onDataChange }: any) {
	const [tile, setTile] = useState('Home');
	const settings = ['Home', 'User', 'Events'];

	return (
		<AppBar position="static">
			<Container
				maxWidth={false}
				disableGutters
				sx={{}}
				className="bg-gray-100"
			>
				<Grid
					container
					alignItems="center"
					sx={{ maxWidth: 1280 }}
					spacing={2}
					marginY={0}
					paddingY={1}
					className="mx-auto"
				>
					<Grid
						xs={12}
						sm={2}
						container
						alignItems="center"
						justifyContent="space-between"
						margin={0}
					>
						<CardMedia
							component="img"
							image="https://i.imgur.com/ICaBO54.png"
							alt="750YP"
							className="hero-image"
							sx={{ borderRadius: 2 }}
							style={{ width: '50%' }}
						/>
					</Grid>

					<Grid xs={12} sm={5} margin={0}>
						<Typography
							variant="h6"
							component="div"
							sx={{
								flexGrow: 1,
								fontSize: '1.25rem',
								fontWeight: 'bold',
								color: 'black',
							}}
						>
							Welcome back, admin!
						</Typography>
					</Grid>

					<Grid xs={12} sm={5} margin={0}>
						<div className="flex space-x-8 justify-end items-center">
							{settings.map((setting) => {
								return (
									<Button
										sx={{
											fontSize: '1rem',
											fontWeight: 'bold',
											color: 'black',
										}}
										key={setting}
										onClick={() => onDataChange(setting)}
									>
										{setting}
									</Button>
								);
							})}
							<Button
								sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}
							>
								<Link to={'/api/auth/logout'}>Logout</Link>
							</Button>
						</div>
					</Grid>
				</Grid>
			</Container>
		</AppBar>
	);
}
