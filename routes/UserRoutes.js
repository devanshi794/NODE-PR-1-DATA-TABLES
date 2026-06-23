import { Router } from "express";
import {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";

const UserRoutes = Router();

UserRoutes.post("/register", registerUser);
UserRoutes.post("/login", loginUser);

UserRoutes.get("/", getAllUsers);
UserRoutes.get("/:id", getUserById);

UserRoutes.put("/:id", updateUser);
UserRoutes.delete("/:id", deleteUser);

export default UserRoutes;