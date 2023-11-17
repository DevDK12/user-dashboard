// Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
import mongoose from "mongoose";




/**
 * userSchema
 * 
 * This is a Mongoose schema for a User document in MongoDB.
 * 
 * It includes:
 * - username: a unique string that is required and has a minimum length of 3 and a maximum length of 20.
 * - email: a unique string that is required.
 * - password: a string that is required.
 * - img: a string that represents the user's image.
 * - isAdmin: a boolean that indicates whether the user is an admin. It defaults to false.
 * - isActive: a boolean that indicates whether the user is active. It defaults to true.
 * - phone: a string that represents the user's phone number.
 * - address: a string that represents the user's address.
 * 
 * @type {mongoose.Schema}
 */

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        img: {
            type: String,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        phone: {
            type: String,
        },
        address: {
            type: String,
        },
    },
    { timestamps: true }
);


export const User = mongoose.models.User || mongoose.model("User", userSchema);
