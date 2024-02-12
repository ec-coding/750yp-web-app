import { CssBaseline } from '@mui/material';

import AppRoutes from './AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
// create a theme in the themes folder and import it here
// call it something like 'theme' or defaultTheme
// put the user provider and what not here when you wire in the auth0

function App() {
	return (
		<>
			<Router>
				<CssBaseline />
				<Header />
				<AppRoutes />
				<Footer />
			</Router>
		</>
	);
}

export default App;
