// this is the file that contains all of the routes for the app

import { Routes, Route, Navigate } from 'react-router-dom';

import AboutUs from './routes/AboutUs';
import Home from './routes/Home';
import Events from './routes/Events';
import Admin from './routes/admin';

function AppRoutes() {
	// route list is an array of objects that contain the path and the component
	const routeList = [
		{ path: '/', component: <Home /> },
		{ path: 'AboutUs', component: <AboutUs /> },
		{ path: 'Events', component: <Events /> },
	];

	// this is the main component that contains all of the routes
	return (
		<Routes>
			{routeList.map((route, index) => (
				<Route key={index} path={route.path} element={route.component} />
			))}
			{/* if the user tries to navigate to a page that isnt in this file, than they navigate to '/' */}
			<Route path="*" element={<Navigate to="/" />} />
			<Route path="admin" element={<Admin />} />
		</Routes>
	);
}

export default AppRoutes;
