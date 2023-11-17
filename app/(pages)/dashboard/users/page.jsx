// Importing necessary components for the UsersPage
import Search from "@/app/components/dashboard/search/search"; // Search component for user search functionality
import styles from "@/app/components/dashboard/users/users.module.css"; // CSS module for styling the UsersPage
import Image from "next/image"; // Image component from Next.js for displaying images
import Link from "next/link"; // Link component from Next.js for navigation
import Pagination from "@/app/components/dashboard/pagination/pagination"; // Pagination component for paginating the user list

// Importing server actions
import { fetchUsers } from "@/app/server-actions/data"; // fetchUsers function for fetching user data from the server
import { deleteUser } from "@/app/server-actions/actions"; // deleteUser function for deleting a user







/**
 * UsersPage Component
 * 
 * This component is responsible for rendering a page that displays a list of users.
 * 
 * It includes:
 * - A Search component, which allows the user to search for a specific user.
 * - A Link component, which redirects to a page where a new user can be added.
 * - A table that displays the name, email, creation date, role, and status of each user.
 * - Each record has two features : 
 *      - 'view user' : redirects to specific user's page with unique id
 *      - 'delete user' : performs NEXTJS server action of 'deleteUser'
 * - A Pagination component, which allows the user to navigate through different pages of the user list.
 * 
 * The layout of these components is controlled by CSS modules, with styles imported from 'users.module.css'.
 * 
 * 
 * @param {Object} searchParams The search parameters passed to the UsersPage component. It expects a 'q' parameter for the search query and a 'page' parameter for the current page number.
 * 
 * @variables : 
 * - query variable: It holds the search query.
 * - page variable: It holds the current page number.
 * - count and users variables: They hold the total count of users and the users for the current page respectively. These values are fetched from the database using the fetchUsers function.
 * 
 * 
 * @returns A JSX element representing the users page.
 */


const UsersPage =  async ({ searchParams }) => {

    const query = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const {count, users } = await fetchUsers(query, page);


    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user..." />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <div className={styles.user}>
                                    <Image
                                        src={user.img || "/noavatar.png"}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className={styles.userImage}
                                    />
                                    {user.username}
                                </div>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.createdAt?.toString().slice(4, 16)}</td>
                            <td>{user.isAdmin ? "Admin" : "Client"}</td>
                            <td>{user.isActive ? "active" : "passive"}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/dashboard/users/${user.id}`}>
                                        <button className={`${styles.button} ${styles.view}`}>
                                            View
                                        </button>
                                    </Link>
                                    <form action={deleteUser}>
                                        <input type="hidden" name="id" value={(user.id)} />
                                        <button className={`${styles.button} ${styles.delete}`}>
                                            Delete
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    );
};

export default UsersPage;
