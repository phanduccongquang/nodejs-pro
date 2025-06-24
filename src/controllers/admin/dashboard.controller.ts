import { Request, Response } from "express";


const getDashboard = async (req: Request, res: Response) => {
    return res.render("admin/dashboard/show.ejs")

}
const getDashboardUser = async (req: Request, res: Response) => {
    return res.render("admin/user/show.ejs")

}

export { getDashboard, getDashboardUser };