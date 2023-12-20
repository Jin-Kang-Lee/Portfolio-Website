
import './globals.css'
import { Roboto } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}