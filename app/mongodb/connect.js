// Importing mongoose from 'mongoose' package
// Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
import mongoose from "mongoose";



// Connection object to keep track of the database connection state
const connection = {};



/**
 * connectToDB Function
 * 
 * This function is responsible for establishing a connection to the MongoDB database.
 * It checks if a connection is already established. If not, it uses mongoose to connect to the database using the connection string stored in the environment variable MONGO.
 * If the connection is successful, it updates the connection object's isConnected property with the readyState of the database connection.
 * If an error occurs during the connection, it logs the error and throws it.
 * 
 * @returns Nothing. It's a void function.
 */

export const connectToDB = async () => {

    try {
        if (connection.isConnected) return;
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
    } 
    catch (error) {
        console.log(error);
        throw new Error(error);
    }
    
};
