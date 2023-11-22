"use server"

import { revalidatePath } from "next/cache"
import { Product, User } from "./models"
import { connectToDB } from "./utils"
import bcrypt from "bcrypt"
import { redirect } from "next/navigation"

export const addUser = async (formData) => {
    const {username, email, password, phone, address, isAdmin, isActive} = Object.fromEntries(formData)
    try{
        connectToDB()
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive,
        })
        await newUser.save()
    }catch(e){
        console.log(e)
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}

export const updateUser = async (formData) => {
    const {id, username, email, password, phone, address, isAdmin, isActive} = Object.fromEntries(formData)
    try{
        connectToDB()
        const updateFields = {
            username, email, password, phone, address, isAdmin, isActive
        }
        Object.keys(updateFields).forEach(key => (updateFields[key] === "" || updateFields[key] === undefined) && delete updateFields[key])

        await User.findByIdAndUpdate(id, updateFields)
    }catch(e){
        console.log(e)
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}

export const addProduct = async (formData) => {
    const {title, desc, price, stock, colorw, size } = Object.fromEntries(formData)
    try{
        connectToDB()
        const newProduct = new Product({
            title, desc, price, stock, colorw, size
        })
        await newProduct.save()
    }catch(e){
        console.log(e)
    }
    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}

export const updateProduct = async (formData) => {
    const {id, title, desc, price, stock, colorw, size} = Object.fromEntries(formData)
    try{
        connectToDB()
        const updateFields = {
            title, desc, price, stock, colorw, size
        }
        Object.keys(updateFields).forEach(key => (updateFields[key] === "" || updateFields[key] === undefined) && delete updateFields[key])

        await Product.findByIdAndUpdate(id, updateFields)
    }catch(e){
        console.log(e)
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData)
    try{
        connectToDB()
        await User.findByIdAndDelete(id)
    }catch(e){
        console.log(e)
    }
    revalidatePath("/dashboard/users")
}

export const deleteProduct = async (formData) => {
    const { id } = Object.fromEntries(formData)
    try{
        connectToDB()
        await Product.findByIdAndDelete(id)
    }catch(e){
        console.log(e)
    }
    revalidatePath("/dashboard/products")
}