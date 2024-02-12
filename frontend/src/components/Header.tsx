// Libraries & Frameworks ///////////////////////////////////////////////
import {
	AppBar,
	Toolbar,
	Box,
	Button,
	useTheme,
	useMediaQuery,
	Container,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// Main Component ///////////////////////////////////////////////
const Header = () => {
	// Hooks ///////////////////////////////////////////////////////////////
	const { user, loginWithRedirect, logout } = useAuth0();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const location = useLocation();

	const isActiveLink = (path) => location.pathname === path;

	// Styles ///////////////////////////////////////////////////////////////
	const activeLinkStyle = {
		textTransform: 'none',
		color: 'black',
		fontWeight: 'bold',
		transition: 'color 0.3s ease',
		mx: 0.5,
		py: 0.5,
		px: 1.5,
		minWidth: 0,
	};

	// Default link style
	const linkStyle = {
		textTransform: 'none',
		color: 'grey',
		fontWeight: 'normal',
		transition: 'color 0.3s ease',
		mx: 0.5,
		py: 0.5,
		px: 1.5,
		minWidth: 0,
	};

	// Handlers ///////////////////////////////////////////////////////////////
	const handleLogin = () => {
		loginWithRedirect();
	};

	const handleLogout = () => {
		logout({ logoutParams: { returnTo: window.location.origin } });
	};

	// Render ///////////////////////////////////////////////////////////////
	return (
		<AppBar position="static" color="default">
			<Container maxWidth={false}>
				<Toolbar
					sx={{
						justifyContent: 'space-between',
						width: '100%',
					}}
				>
					<Link to="/">
						<img
							src="https://i.imgur.com/ICaBO54.png"
							alt="750YP"
							style={{ width: isMobile ? 100 : 150 }}
						/>
					</Link>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
						{/* Dynamically apply styles based on active link */}
						<Link to="/">
							<Button style={isActiveLink('/') ? activeLinkStyle : linkStyle}>
								Home
							</Button>
						</Link>
						<Link to="/AboutUs">
							<Button
								style={isActiveLink('/AboutUs') ? activeLinkStyle : linkStyle}
							>
								About Us
							</Button>
						</Link>
						<Link to="/Events">
							<Button
								style={isActiveLink('/Events') ? activeLinkStyle : linkStyle}
							>
								Events
							</Button>
						</Link>
						{/* needs functionality */}
						{user ? (
							<Link to="/api/auth/logout">
								<Button style={linkStyle} onClick={handleLogout}>
									Log Out
								</Button>
							</Link>
						) : (
							<>
								<Link to="/api/auth/login">
									<Button style={linkStyle} onClick={handleLogin}>
										Log In
									</Button>
								</Link>
								<Link to="/api/auth/login">
									<Button
										variant="contained"
										sx={{
											textTransform: 'none',
											color: 'black',
											fontWeight: 'bold',
											borderRadius: '60px',
											paddingX: 8,
											bgcolor: '#f3ce49',
										}}
									>
										Sign Up
									</Button>
								</Link>
							</>
						)}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
