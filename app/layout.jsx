import './globals.css'
import Navbar from './navbar'
import Footer from './Footer'
import {Fira_Sans} from "next/font/google"

const firasans = Fira_Sans({subsets: ['latin'] , weight: "400"})

export const metadata = {
  title: 'Electrolyfe',
  description: 'Explore Electrolytes like never before',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firasans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
