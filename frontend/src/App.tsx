import { CssBaseline } from '@mui/material';

import AppRoutes from './AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
// create a theme in the themes folder and import it here
// call it something like 'theme' or defaultTheme

function App() {
	return (
		<>
			<Auth0Provider
				domain={import.meta.env.VITE_AUTH0_DOMAIN}
				clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
				authorizationParams={{
					redirectUri: window.location.origin,
				}}
			>
				<Router>
					<CssBaseline />
					<Header />
					<AppRoutes />
					<Footer />
				</Router>
			</Auth0Provider>
		</>
	);
}

export default App;
