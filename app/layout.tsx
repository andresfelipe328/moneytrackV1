import './globals.css'

import { Oswald } from '@next/font/google'
import Navbar from '@/components/global/Navbar'
const oswald = Oswald({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <main className='bg-primary-dark'>
          <div className='flex flex-col gap-4 h-screen max-w-7xl mx-auto p-2'>
            <Navbar/>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
