"use client";

// Importing necessary packages, components, and styles for the Navbar component
import { usePathname } from "next/navigation"; // usePathname hook from Next.js for getting the current pathname
import styles from "./navbar.module.css"; // CSS module for styling the Navbar component
import { 
  MdNotifications, 
  MdOutlineChat, 
  MdPublic
} from "react-icons/md"; // Importing specific icons from react-icons




/**
 * Navbar Component
 * 
 * This component is responsible for rendering the navigation bar of the dashboard.
 * 
 * It includes:
 * - A title, which displays the last segment of the current pathname.
 * - A menu, which includes several icons.
 * 
 * It uses the usePathname hook to get the current pathname.
 * 
 * The layout of these components is controlled by CSS modules, with styles imported from 'navbar.module.css'.
 * 
 * @returns A JSX element representing the navigation bar of the dashboard.
 */


const Navbar = () => {
  


  /**
 * This gets the current pathname in the Navbar component.
 * It uses the usePathname hook from Next.js, which returns the current pathname.
 * The pathname is used to display the last segment of the current pathname as the title in the Navbar component.
 */
  const pathname = usePathname();

  
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
