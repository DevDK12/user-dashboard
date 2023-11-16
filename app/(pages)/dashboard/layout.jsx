import Navbar from "@/app/components/dashboard/navbar/navbar"
import Sidebar from "@/app/components/dashboard/sidebar/sidebar"
import styles from "@/app/components/dashboard/dashboard.module.css"
import Footer from "@/app/components/dashboard/footer/footer"



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