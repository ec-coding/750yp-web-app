import Layout from '../components/layout';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { trpc } from '../utils/trpc';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
		{/* clean css baseline */}
			<CssBaseline />
			{/* parent layout */}
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};

export default trpc.withTRPC(App);
