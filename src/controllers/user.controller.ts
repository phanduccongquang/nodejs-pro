import { Request, Response } from "express";
import { handleCreateUser, getAllUser, handleDeleteUser, getUserById, updateUserById, getAllRole } from "services/user.service"



const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUser();
    console.log("check user:", users);
    return res.render('home', {
        users: users
    });
}

const getCreateUserPage = async (req: Request, res: Response) => {
    const roles = await getAllRole();
    return res.render("admin/user/create.ejs", ({
        roles
    }));
}
const postCreateUserPage = async (req: Request, res: Response) => {
    const { fullname, username, phone, role, address } = req.body
    const file = req.file;
    const avatar = file?.filename ?? "";
    console.log("check", avatar);

    await handleCreateUser(fullname, username, address, phone, avatar)
    return res.redirect("/admin/user")
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