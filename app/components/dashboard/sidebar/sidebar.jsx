// Importing necessary packages, components, and styles for the Sidebar component
import Image from "next/image"; // Image component from Next.js for displaying images
import MenuLink from "./menuLink/menuLink"; // MenuLink component for displaying a link in the menu
import styles from "./sidebar.module.css"; // CSS module for styling the Sidebar component
import { 
  MdDashboard, 
  MdSupervisedUserCircle, 
  MdPeople 
} from "react-icons/md"; // Importing specific icons from react-icons







const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Add User",
        path: "/dashboard/users/add",
        icon: <MdPeople/>,
      },
    ],
  },
];






const user = {
  email: "dev@admin.com",
  username: "Dev Kumar",

}





/**
 * Sidebar Component
 * 
 * This component is responsible for rendering the sidebar of the dashboard.
 * 
 * It includes:
 * - A list of MenuLink components, which display links to different pages in the dashboard. The links and their corresponding icons are defined in the menuItems array.
 * 
 * The layout of these components is controlled by CSS modules, with styles imported from 'sidebar.module.css'.
 * 
 * @returns A JSX element representing the sidebar of the dashboard.
 */

const Sidebar = async () => {


  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={user.img || "/noavatar.png"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>

        {menuItems.map((cat) => (

          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>

            {cat.list.map((item) => (
              <MenuLink 
                item={item} 
                key={item.title} 
              />
            ))}

          </li>

        ))}

      </ul>
    </div>
  );
};

export default Sidebar;
