import express, { Express } from "express";

import { getHomePage, getCreateUserPage, postCreateUserPage, postDeleteUserPage, getViewUser, updateUserPage } from "controllers/user.controller";
import { getDashboard, getDashboardUser, getDashboardProduct, getDashboardOrder } from "controllers/admin/dashboard.controller";
import fileUploadMiddleware from "src/middleware/multer";


const router = express.Router();

const webRouter = (app: Express) => {

    router.get("/", getHomePage)


    router.post("/delete-user/:id", postDeleteUserPage)
    router.get("/view-user/:id", getViewUser)
    router.post("/update-user", updateUserPage)
    router.get("/admin", getDashboard)
    router.get("/admin/user", getDashboardUser)
    router.get("/admin/create-user", getCreateUserPage)

    router.get("/admin/product", getDashboardProduct)
    router.get("/admin/order", getDashboardOrder)
    router.post("/admin/create-user", fileUploadMiddleware("avatar"), postCreateUserPage)










    app.use("/", router)
}


export default webRouter;