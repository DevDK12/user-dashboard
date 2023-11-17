"use client"

// Importing necessary packages, components, and styles for the MenuLink component
import Link from 'next/link'; // Link component from Next.js for creating links
import styles from './menuLink.module.css'; // CSS module for styling the MenuLink component
import { usePathname } from 'next/navigation'; // usePathname hook from Next.js for getting the current pathname




/**
 * MenuLink Component
 * 
 * This component is responsible for rendering a link in the menu.
 * It takes an item object as a prop, which includes the path, icon, and title of the link.
 * It uses the usePathname hook to get the current pathname and adds the 'active' class to the link if the current pathname matches the path of the link.
 * 
 * The layout of this component is controlled by CSS modules, with styles imported from 'menuLink.module.css'.
 * 
 * @param {Object} item The item object passed to the MenuLink component. It expects properties for path, icon, and title.
 * @returns A JSX element representing a link in the menu.
 */

const MenuLink = ({item}) => {

  const pathname = usePathname()

  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink