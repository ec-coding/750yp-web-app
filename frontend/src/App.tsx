import { CssBaseline } from '@mui/material';

import AppRoutes from './AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { trpc } from './utils/trpc';
import { useState } from 'react';


// create a theme in the themes folder and import it here
// call it something like 'theme' or defaultTheme

const theme = createTheme({
	typography: {
		fontFamily: 'Fira Sans, sans-serif',
	},
});

<<<<<<< HEAD
function getAuthCookie(): string | string[] | undefined {
	// Implement the logic to retrieve the authentication cookie here
	// For example, you can use document.cookie to get the cookie value
	const cookieName = 'authCookie';
	const cookies = document.cookie.split(';');
	for (const cookie of cookies) {
		const [name, value] = cookie.trim().split('=');
		if (name === cookieName) {
			return value;
		}
	}
	return undefined;
}

function App() {


	const [queryClient] = useState(() => new QueryClient());
	// const [trpcClient] = useState(() =>
	// 	createClient({
	// 		links: [
	// 			httpBatchLink({
	// 				url: 'http://localhost:3000/trpc',
	// 				async headers() {
	// 					return {
	// 						authorization: getAuthCookie(),
	// 					};
	// 				},
	// 			}),
	// 		],
	// 	}),
	// );

	
=======
const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;

function App() {
>>>>>>> 33f81dedb81fe5092e79f68f4ae42f697b0c2eea
	return (
		<>
			<Auth0Provider
				domain={auth0Domain}
				clientId={clientId}
				authorizationParams={{
					redirect_uri: redirectUri,
				}}
			>
				
				<Router>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Header />
						<AppRoutes />
						
						<Footer />
					</ThemeProvider>
				</Router>
			
			</Auth0Provider>
		</>
	);
}

export default App;


