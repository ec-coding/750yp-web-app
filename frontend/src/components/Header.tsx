// Libraries & Frameworks ///////////////////////////////////////////////
import {
	AppBar,
	Toolbar,
	Box,
	Button,
	IconButton,
	useTheme,
	useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
// cant be using the nextjs-auth0 now can we?
// this is the react version, the methods and whatnot are different
// read the docs and implement the correct methods
import { useAuth0 } from '@auth0/auth0-react';
// import { useUser } from '@auth0/nextjs-auth0/client';
// import Link from 'next/link';

// Main Component ///////////////////////////////////////////////
const Header = () => {
	// Hooks ///////////////////////////////////////////////////////////////
	// replace with auth0-react
	// const { user } = useUser();
	// this should replace it?
	const { user } = useAuth0();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	// Render ///////////////////////////////////////////////////////////////
	return (
		<AppBar
			position="static"
			color="default"
			elevation={1}
			// sx={{ backgroundColor: '#f5f5f5' }}
		>
			<Toolbar
				sx={{
					justifyContent: 'space-between',
					maxWidth: 1280,
					width: '100%',
					mx: 'auto',
				}}
			>
				<Link to="/">
					{/* make this not an IconButton */}
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="logo"
					>
						{/* replace with something better */}
						<img
							src="https://i.imgur.com/ICaBO54.png"
							alt="750YP"
							style={{ width: isMobile ? 100 : 150 }}
						/>
					</IconButton>
				</Link>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
					<Link to="/">
						<Button
							color="inherit"
							sx={{ textTransform: 'none', color: 'black' }}
						>
							Home
						</Button>
					</Link>
					<Link to="/AboutUs">
						<Button
							color="inherit"
							sx={{ textTransform: 'none', color: 'black' }}
						>
							About Us
						</Button>
					</Link>
					<Link to="/Events">
						<Button
							color="inherit"
							sx={{ textTransform: 'none', color: 'black' }}
						>
							Events
						</Button>
					</Link>
					{user ? (
						<Link to="/api/auth/logout">
							<Button
								color="inherit"
								sx={{ textTransform: 'none', color: 'black' }}
							>
								Log Out
							</Button>
						</Link>
					) : (
						<>
							<Link to="/api/auth/login">
								<Button
									color="inherit"
									sx={{ textTransform: 'none', color: 'black' }}
								>
									Log In
								</Button>
							</Link>
							<Link to="/api/auth/login">
								<Button
									variant="contained"
									color="primary"
									sx={{
										textTransform: 'none',
										color: 'black',
										fontWeight: 'bold',
										borderRadius: '60px',
										paddingX: 8,
										bgcolor: '#f5f5f5',
									}}
								>
									Sign Up
								</Button>
							</Link>
						</>
					)}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
