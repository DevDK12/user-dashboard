// Importing necessary functions and constants for the fetchUsers action
import { User } from "@/app/mongodb/models"; // User model for interacting with the User collection in the MongoDB database
import { connectToDB } from "@/app/mongodb/connect"; // connectToDB function for establishing a connection to the MongoDB database
import {ITEM_PER_PAGE} from "@/app/constants"; // Constant for the number of items to display per page





/**
 * fetchUsers Function
 * 
 * This function is responsible for fetching a list of users from the MongoDB database.
 * 
 * It takes a query string and a page number as parameters. The query string is used to filter the users by username, and the page number is used for pagination.
 * 
 * It first establishes a connection to the database using the connectToDB function. Then, it creates a regex from the query string and uses this regex to find users whose username matches the regex.
 * 
 * It Implements Pagination by limiting the number of users returned to the number specified in ITEM_PER_PAGE and skips the users of the previous pages.
 * 
 * It returns an object with the total count of users and the users for the current page.
 * 
 * If an error occurs during the process, it logs the error and throws a new Error with a message indicating that the user fetching failed.
 * 
 * @param {string} q The query string passed to the fetchUsers function. It's used to filter the users by username.
 * @param {number} page The page number for pagination.
 * @returns {Object} An object with the total count of users and the users for the current page.
 */


export const fetchUsers = async (q, page) => {

    const regex = new RegExp(q, "i");

    try {
        await connectToDB();
        const count = await User.find({ username: { $regex: regex } }).count();

        const users = await User.find({ username: { $regex: regex } })
            .limit(ITEM_PER_PAGE)
            .skip(ITEM_PER_PAGE * (page - 1));

        return { count, users };

    } 
    catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
};









/**
 * fetchUser Function
 * 
 * This function is responsible for fetching a single user from the MongoDB database.
 * 
 * It takes a user id as a parameter and uses this id to find the user in the database.
 * It first establishes a connection to the database using the connectToDB function. Then, it uses the User model's findById method to find the user in the database.
 * It returns the user object if the user is found.
 * If an error occurs during the process, it logs the error and throws a new Error with a message indicating that the user fetching failed.
 * 
 * @param {string} id The id of the user to fetch.
 * @returns {Object} The user object if the user is found.
 */

export const fetchUser = async (id) => {
    try {
        connectToDB();
        const user = await User.findById(id);
        return user;
    } 
    catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
};


