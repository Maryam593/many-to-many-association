import { Router } from "express";
import userController from "../../controller/user/index.js";
const userRouter = Router();
userRouter.get("/Allusers",userController.getAll);
userRouter.get("/FindUser/:id",userController.getSingle);

export default userRouter;