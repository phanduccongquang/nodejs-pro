import express, { Express } from "express";

import { getHomePage, getCreateUserPage, postCreateUserPage, postDeleteUserPage, getViewUser } from "controllers/user.controller";

const router = express.Router();

const webRouter = (app: Express) => {

    router.get("/", getHomePage)

    router.get("/create-user", getCreateUserPage)

    router.post("/create-user", postCreateUserPage)
    router.post("/delete-user/:id", postDeleteUserPage)
    router.get("/view-user/:id", getViewUser)



    app.use("/", router)
}


export default webRouter;