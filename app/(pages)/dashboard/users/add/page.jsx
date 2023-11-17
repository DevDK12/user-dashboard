// Importing necessary components for the AddUserPage
import styles from "@/app/components/dashboard/users/addUser/addUser.module.css"; // CSS module for styling the AddUserPage

// Importing server actions
import { addUser } from "@/app/server-actions/actions"; // addUser function for adding a new user





/**
 * AddUserPage Component
 * 
 * This component is responsible for rendering a form that allows the addition of a new user.
 * 
 * It includes:
 * - A form with fields for username, email, password, phone, admin status, active status, and address.
 * - The form uses the addUser function as its action, which  performs NEXTJS server action and sends the form data to the server to create a new user.
 * 
 * The layout of these components is controlled by CSS modules, with styles imported from 'addUser.module.css'.
 * 
 * @returns A JSX element representing the add user page.
 */

const AddUserPage = () => {
    return (
        <div className={styles.container}>
            <form action={addUser} className={styles.form}>
                <input type="text" placeholder="username" name="username" required />
                <input type="email" placeholder="email" name="email" required />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                />
                <input type="phone" placeholder="phone" name="phone" />
                <select name="isAdmin" id="isAdmin">
                    <option value={false}>
                        Is Admin?
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={true}>
                        Is Active?
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea
                    name="address"
                    id="address"
                    rows="16"
                    placeholder="Address"
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddUserPage;
