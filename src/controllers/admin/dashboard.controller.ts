import { Request, Response } from "express";
import { getAllUser } from "services/user.service";


const getDashboard = async (req: Request, res: Response) => {
    return res.render("admin/dashboard/show.ejs")

}
const getDashboardUser = async (req: Request, res: Response) => {
    const users = await getAllUser();

    return res.render("admin/user/show.ejs", ({
        users: users,
    }))

}
const getDashboardProduct = async (req: Request, res: Response) => {
    return res.render("admin/product/show.ejs")

}
const getDashboardOrder = async (req: Request, res: Response) => {
    return res.render("admin/order/show.ejs")

}

export { getDashboard, getDashboardUser, getDashboardProduct, getDashboardOrder };