"use server";

import { revalidatePath } from "next/cache";
import {  User } from "@/app/mongodb/models";
import { connectToDB } from "@/app/mongodb/connect";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";





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