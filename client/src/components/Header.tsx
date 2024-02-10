import {
	AppBar,
	Toolbar,
	Box,
	Button,
	IconButton,
	useTheme,
	useMediaQuery,
} from '@mui/material';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

const Header = () => {
	const { user } = useUser();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
				<Link href="/" passHref>
					<IconButton
						component="a"
						size="large"
						edge="start"
						color="inherit"
						aria-label="logo"
					>
						{/* replace with next/image */}
						<img
							src="https://i.imgur.com/ICaBO54.png"
							alt="750YP"
							style={{ width: isMobile ? 100 : 150 }}
						/>
					</IconButton>
				</Link>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
					<Link href="/" passHref>
						<Button
							color="inherit"
							sx={{ textTransform: 'none', color: 'black' }}
						>
							Home
						</Button>
					</Link>
					<Link href="/AboutUs" passHref>
						<Button
							color="inherit"
							sx={{ textTransform: 'none', color: 'black' }}
						>
							About Us
						</Button>
					</Link>
					<Link href="/Events" passHref>
						<Button
							color="inherit"
							sx={{ textTransform: 'none', color: 'black' }}
						>
							Events
						</Button>
					</Link>
					{user ? (
						<Link href="/api/auth/logout" passHref>
							<Button
								color="inherit"
								sx={{ textTransform: 'none', color: 'black' }}
							>
								Log Out
							</Button>
						</Link>
					) : (
						<>
							<Link href="/api/auth/login" passHref>
								<Button
									color="inherit"
									sx={{ textTransform: 'none', color: 'black' }}
								>
									Log In
								</Button>
							</Link>
							<Link href="/api/auth/login" passHref>
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
