import { Request, Response } from "express"



const getCreateProductPage = async (req: Request, res: Response) => {
    return res.render("admin/product/create.ejs")

}

const postCreateProductPage = async (req: Request, res: Response) => {
    const { name } = req.body;
    return res.redirect("/admin/product")
}
export {
    getCreateProductPage, postCreateProductPage
}