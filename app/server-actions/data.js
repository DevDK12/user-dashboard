import { User } from "@/app/mongodb/models";
import { connectToDB } from "@/app/mongodb/connect";





const ITEM_PER_PAGE = 6;


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


