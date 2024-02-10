import Header from './Header';
import Footer from './Footer';
import { Inter } from 'next/font/google';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<UserProvider>
			<Head>
				<title>750YP</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"
					rel="stylesheet"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
				/>
			</Head>
			<Header />
			<main style={{ fontFamily: inter }}>{children}</main>
			<Footer />
		</UserProvider>
	);
};

export default RootLayout;
