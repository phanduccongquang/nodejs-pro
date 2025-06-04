import { Request, Response } from "express";
import { handleCreateUser, getAllUser, handleDeleteUser, getUserById, updateUserById } from "services/user.service"



const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUser();
    console.log("check user:", users);
    return res.render('home', {
        users: users
    });
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render('create-user');
}
const postCreateUserPage = async (req: Request, res: Response) => {
    const { fullname, email, address } = req.body
    await handleCreateUser(fullname, email, address)
    return res.redirect("/")
}
const postDeleteUserPage = async (req: Request, res: Response) => {
    const { id } = req.params
    handleDeleteUser(id);
    return res.redirect("/")
}
const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await getUserById(id);
    return res.render("view-user.ejs", {
        id: id,
        user: user
    })
}
const updateUserPage = async (req: Request, res: Response) => {
    const { id, fullname, email, address, } = req.body
    await updateUserById(id, fullname, email, address);
    return res.redirect("/")
}


export { getHomePage, getCreateUserPage, postCreateUserPage, postDeleteUserPage, getViewUser, updateUserPage };