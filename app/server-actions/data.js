import { User } from "@/app/mongodb/models";
import { connectToDB } from "@/app/mongodb/connect";



export const fetchUsers = async () => {


    try {
        await connectToDB();

        const users = await User.find();

        return users;
    } 
    catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
};

