// Importing necessary components for the Layout
import Navbar from "@/app/components/dashboard/navbar/navbar"; // Navbar component for displaying the navigation bar
import Sidebar from "@/app/components/dashboard/sidebar/sidebar"; // Sidebar component for displaying the sidebar menu
import styles from "@/app/components/dashboard/dashboard.module.css"; // CSS module for styling the Layout
import Footer from "@/app/components/dashboard/footer/footer"; // Footer component for displaying the footer





/**
 * Layout Component
 * 
 * This component renders the main layout of the application.
 * 
 * It includes:
 * - A Sidebar component, which displays the sidebar menu.
 * - A Navbar component, which displays the navigation bar.
 * - A Footer component, which displays the footer.
 * - The children components, which are passed as props to the Layout component and rendered in the main content area.
 * 
 * The layout of these components is controlled by CSS modules, with styles imported from 'dashboard.module.css'.
 * 
 * @param {Object} props The props passed to the Layout component. It expects a 'children' prop, which represents the main content to be displayed.
 * @returns A JSX element representing the layout.
 */

const Layout = ({children}) => {

  
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
  )
}

export default Layout