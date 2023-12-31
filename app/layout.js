import './globals.css'
import { Inter } from 'next/font/google'
import { getServerSession } from "next-auth"
// import { SessionProvider } from "next-auth/react"
import SessionProvider from "./components/SessionProvider"
import AuthButton from './components/AuthButton'
import { authOptions } from './api/auth/[...nextauth]/route'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <AuthButton/>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
