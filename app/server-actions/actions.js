"use server";

// Importing necessary functions and packages for the addUser action
import { revalidatePath } from "next/cache"; // revalidatePath function from Next.js for revalidating a path
import { User } from "@/app/mongodb/models"; // User model for interacting with the User collection in the MongoDB database
import { connectToDB } from "@/app/mongodb/connect"; // connectToDB function for establishing a connection to the MongoDB database
import { redirect } from "next/navigation"; // redirect function from Next.js for handling redirects
import bcrypt from "bcrypt"; // bcrypt package for hashing passwords





/**
 * addUser Function
 * 
 * This function is responsible for adding a new user to the MongoDB database.
 * 
 * It takes a formData object as a parameter, which includes the user's username, email, password, phone, address, isAdmin status, and isActive status.
 * It first establishes a connection to the database using the connectToDB function. Then, it hashes the user's password using bcrypt.
 * It creates a newUser object using the User model and the user's details, and saves this newUser object to the database.
 * If an error occurs during the process, it logs the error and throws a new Error with a message indicating that the user addition failed.
 * 
 * @param {Object} formData The form data passed to the addUser function. It expects properties for username, email, password, phone, address, isAdmin, and isActive.
 * @returns Nothing. It's a void function.
 */
export const addUser = async (formData) => {


    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {
        await connectToDB();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive,
        });

        await newUser.save();
    } 
    catch (err) {
        console.log(err);
        throw new Error("Failed to create user!");
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
    
};




/**
 * updateUser Function
 * 
 * This function is responsible for updating a user's details in the MongoDB database.
 * 
 * It takes a formData object as a parameter, which includes the user's id, username, email, password, phone, address, isAdmin status, and isActive status.
 * It first establishes a connection to the database using the connectToDB function. Then, it creates an updateFields object with the user's details.
 * It removes any fields from updateFields that are empty or undefined. Then, it uses the User model's findByIdAndUpdate method to update the user's details in the database.
 * If an error occurs during the process, it logs the error and throws a new Error with a message indicating that the user update failed.
 * 
 * @param {Object} formData The form data passed to the updateUser function. It expects properties for id, username, email, password, phone, address, isAdmin, and isActive.
 * @returns Nothing. It's a void function.
 */

export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } =
        Object.fromEntries(formData);

    try {
        connectToDB();

        const updateFields = {
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive,
        };

        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key] === "" || undefined) && delete updateFields[key]
        );

        await User.findByIdAndUpdate(id, updateFields);

    } 
    catch (err) {
        console.log(err);
        throw new Error("Failed to update user!");
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};







/**
 * deleteUser Function
 * 
 * This function is responsible for deleting a user from the MongoDB database.
 * 
 * It takes a formData object as a parameter, which includes the user's id.
 * It first establishes a connection to the database using the connectToDB function. Then, it uses the User model's findByIdAndDelete method to delete the user from the database.
 * If an error occurs during the process, it logs the error and throws a new Error with a message indicating that the user deletion failed.
 * 
 * @param {Object} formData The form data passed to the deleteUser function. It expects a property for id.
 * @returns Nothing. It's a void function.
 */

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        await User.findByIdAndDelete(id);
    } 
    catch (err) {
        console.log(err);
        throw new Error("Failed to delete user!");
    }

    revalidatePath("/dashboard/products");
};
