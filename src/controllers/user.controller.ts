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

    await handleCreateUser(fullname, username, address, phone, avatar, role)
    return res.redirect("/admin/user")
}
const postDeleteUserPage = async (req: Request, res: Response) => {
    const { id } = req.params
    handleDeleteUser(id);
    return res.redirect("/admin/user")
}
const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await getUserById(id);
    const roles = await getAllRole()


    return res.render("admin/user/detail.ejs", {
        id: id,
        user: user,
        roles

    })
}
const updateUserPage = async (req: Request, res: Response) => {
    const { id, fullname, phone, role, address } = req.body
    const file = req.file;
    const avatar = file?.filename ?? "undefined ";
    await updateUserById(id, fullname, role, phone, avatar, address)

    return res.redirect("/admin/user")
}


export { getHomePage, getCreateUserPage, postCreateUserPage, postDeleteUserPage, getViewUser, updateUserPage };