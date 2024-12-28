import { Router } from "express";
import { getUserProfile, loginUser, logoutUser, registerUser } from "../controllers/users";


const userRouter = Router();

userRouter.post("/users/register", registerUser);

userRouter.post("/users/login", loginUser);

userRouter.get("/users/me", getUserProfile);

userRouter.post("/users/logout", logoutUser);
