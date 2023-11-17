// Importing necessary components and functions for the SingleUserPage
import { updateUser } from "@/app/server-actions/actions"; // updateUser function for updating user data
import { fetchUser } from "@/app/server-actions/data"; // fetchUser function for fetching user data from the server
import styles from "@/app/components/dashboard/users/singleUser/singleUser.module.css"; // CSS module for styling the SingleUserPage
import Image from "next/image"; // Image component from Next.js for displaying images




/**
 * SingleUserPage Component
 * 
 * This component is responsible for rendering a page that displays the details of a single user and allows for updating these details.
 * 
 * It includes:
 * - An Image component, which displays the user's avatar.
 * - A form with fields for username, email, and password. The form uses the updateUser function, which  performs NEXTJS server action and sends the form data to the server to update the user's details.
 * 
 * The layout of these components is controlled by CSS modules, with styles imported from 'singleUser.module.css'.
 * 
 * 
 * 
 * @param {Object} params The parameters passed to the SingleUserPage component. It expects an 'id' parameter for the ID of the user to be displayed.
 * 
 * @variables : 
 * - id : fetches id from route params
 * - user : fetches user by id via server-action fetchUser() 
 * 
 * @returns A JSX element representing the single user page.
 */

const SingleUserPage = async ({ params }) => {

    const { id } = params;
    const user = await fetchUser(id);

    return (
        <div className={styles.container}>

            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={user.img || "/noavatar.png"} alt="" fill />
                </div>
                {user.username}
            </div>
            
            <div className={styles.formContainer}>
                <form action={updateUser}  className={styles.form}>
                    <input type="hidden" name="id" value={user.id} />

                    <label>Username</label>
                    <input type="text" name="username" placeholder={user.username} />
                    
                    <label>Email</label>
                    <input type="email" name="email" placeholder={user.email} />
                    
                    <label>Password</label>
                    <input type="password" name="password" />
                    
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder={user.phone} />
                    
                    <label>Address</label>
                    <textarea type="text" name="address" placeholder={user.address} />
                    
                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true} defaultValue={user.isAdmin}>Yes</option>
                        <option value={false} defaultValue={!user.isAdmin}>No</option>
                    </select>

                    <label>Is Active?</label>
                    <select name="isActive" id="isActive">
                        <option value={true} defaultValue={user.isActive}>Yes</option>
                        <option value={false} defaultValue={!user.isActive}>No</option>
                    </select>
                    
                    <button>Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleUserPage;
