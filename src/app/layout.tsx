import type { Metadata } from 'next'
import './globals.css'
import { verifyAuthentication } from '@/strategies/verify-authentication'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'App',
}

export default async function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  const isAuthenticated = await verifyAuthentication()

  // if (!isAuthenticated) {
  //   redirect('/auth/sign-in')
  // }

  return (
    <html lang='en' className='dark'>
      <body>
        {children}
      </body>
    </html>
  )
}