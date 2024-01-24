import { Inter } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <UserProvider>
      <Head>
        <title>750YP</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet"></link>
      </Head>
      {children}
    </UserProvider>
  )
}
