// Libraries & Frameworks ///////////////////////////////////////////////
import { ReactNode } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Head from 'next/head';

// Components, Hooks, & Utils ///////////////////////////////////////////////
import Header from './Header';
import Footer from './Footer';

// Types ///////////////////////////////////////////////
interface RootLayoutProps {
	children: ReactNode;
}

// Main Component ///////////////////////////////////////////////
const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
	// Render ///////////////////////////////////////////////////////////////
	return (
		<UserProvider>
			<Head>
				<title>750YP</title>
			</Head>
			<Header />
			<main style={{ fontFamily: 'Inter, sans-serif' }}>{children}</main>
			<Footer />
		</UserProvider>
	);
};

export default RootLayout;
