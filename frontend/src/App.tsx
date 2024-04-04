import { CssBaseline } from '@mui/material';

import AppRoutes from './AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// create a theme in the themes folder and import it here
// call it something like 'theme' or defaultTheme

const theme = createTheme({
	typography: {
		fontFamily: "Alike, serif",
	},
});

const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;

function App() {
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
