
import { Inter } from 'next/font/google'; // Importing the Inter font from Google Fonts through the 'next/font' package
import '@/app/components/globals.css'; // Importing global styles




// Initializing the Inter font with the 'latin' subset
const inter = Inter({ subsets: ['latin'] })


// Metadata for the layout
export const metadata = {
  title: 'Dev User Dashboard', // The title of the layout
  description: 'User Dashboard for Admin', // The description of the layout
}






/**
 * RootLayout Component
 * 
 * This component is responsible for rendering the root layout of the application.
 * 
 * It includes:
 * - An HTML element with the language set to 'en'.
 * - A body element with the class name set to the class name of the Inter font. The children of the RootLayout component are rendered inside this body element.
 * 
 * @param {Object} props The props passed to the RootLayout component. It expects a 'children' prop, which represents the main content to be displayed.
 * @returns A JSX element representing the root layout.
 */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
