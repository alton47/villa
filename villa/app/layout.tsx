import { Nunito } from 'next/font/google';
import Navbar from './components/Navbar/Navbar';
import './globals.css'

export const metadata = {
  title: 'Villa by Allan Alton',
  description: 'An AirBnB clone',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {   
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
         {children}
      </body>
    </html>
  )
}
