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
		fontFamily: 'Fira Sans, sans-serif'
	},
});

function App() {

	
	return (
		<>
			<Auth0Provider
				domain={import.meta.env.VITE_DOMAIN}
				clientId={import.meta.env.VITE_CLIENT_ID}
				authorizationParams={{
					redirectUri: window.location.origin,
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
