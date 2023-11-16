import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdPeople,
  MdAnalytics,
} from "react-icons/md";

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
  email: "dev@dev.com",
  username: "dev kumar",

}






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
