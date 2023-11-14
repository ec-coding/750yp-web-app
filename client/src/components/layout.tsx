import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {/* <Link href="/AboutUs">
        About Us
      </Link> */}
      {children}
    </div>
  )
}
