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
import MobileMenu from './MobileMenu';

// Main Component ///////////////////////////////////////////////
const Header = () => {
	// Hooks ///////////////////////////////////////////////////////////////
	// const { user, loginWithRedirect, logout } = useAuth0();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const location = useLocation();

	const isActiveLink = (path: string) => location.pathname === path;
	const { isAuthenticated } = useAuth0();
	console.log(isAuthenticated);

	// Styles ///////////////////////////////////////////////////////////////
	const activeLinkStyle = {
		textTransform: 'none',
		color: 'black',
		fontWeight: 'bold',
		fontSize: 20,
		transition: 'color 0.3s ease',
		// being implicit just in case
		// mx: 0.5,
		marginLeft: 0.5,
		marginRight: 0.5,
		paddingY: 0.5,
		paddingX: 1.5,
		// py: 0.5,
		// px: 1.5,
		minWidth: 0,
	};

	// Default link style
	const linkStyle = {
		textTransform: 'none',
		color: 'grey',
		fontWeight: 'normal',
		fontSize: 20,
		transition: 'color 0.3s ease',
		// being implicit just in case
		// mx: 0.5,
		marginLeft: 0.5,
		marginRight: 0.5,
		paddingY: 0.5,
		paddingX: 1.5,
		// py: 0.5,
		// px: 1.5,
		minWidth: 0,
	};

	// Handlers ///////////////////////////////////////////////////////////////
	// const handleLogin = () => {
	// 	loginWithRedirect();
	// };

	// const handleLogout = () => {
	// 	logout({ logoutParams: { returnTo: window.location.origin } });
	// };

	// Render ///////////////////////////////////////////////////////////////
	return (
		<AppBar position="static" color="default">
			<Container maxWidth={false}>
				<Toolbar
					sx={{
						justifyContent: 'space-between',
						width: {
							xs: '100%',
							sm: '640px',
							md: '768px',
							lg: '1024px',
							xl: '1280px'
						},
						margin: 'auto'
					}}
				>
					<Link to="/">
						<img
							src="https://i.imgur.com/ICaBO54.png"
							alt="750YP"
							style={{ width: isMobile ? 100 : 150 }}
						/>
					</Link>
					<MobileMenu />
					{!isMobile && ( // Render the following elements if viewport is not below 'sm' breakpoint
						<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
							{/* Dynamically apply styles based on active link */}
							<Link to="/">
								<Button sx={isActiveLink('/') ? activeLinkStyle : linkStyle}>
									Home
								</Button>
							</Link>
							<Link to="/AboutUs">
								<Button
									sx={isActiveLink('/AboutUs') ? activeLinkStyle : linkStyle}
								>
									About Us
								</Button>
							</Link>
							<Link to="/Events">
								<Button
									sx={isActiveLink('/Events') ? activeLinkStyle : linkStyle}
								>
									Events
								</Button>
							</Link>
							{/* needs functionality */}
							{/* {isAuthenticated ? (
				
							<Button sx={linkStyle} onClick={handleLogout}>
								Log Out
							</Button>
					
					) : (
						<>
							
								<Button sx={linkStyle} onClick={handleLogin}>
									Log In
								</Button>
							
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
									onClick={handleLogin}
								>
									Sign Up
								</Button>
							
						</>
					)} */}
						</Box>
					)}
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;