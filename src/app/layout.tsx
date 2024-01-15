import type { Metadata } from 'next'
import {archivo} from "@/Utils/fonts/fonts";
import './globals.css'
import Navbar from "@/Components/Navbar/navbar";


export const metadata: Metadata = {
  title: 'Book of Ryu',
  description: "A collection of Ryle's thoughts and a log of stuff he learned",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={archivo.className}>
      <Navbar />
        {children}
      <footer>Book of Ryu | 2024</footer>
      </body>
    </html>
  )
}
