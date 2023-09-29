import express from "express";
import addUser  from "../controller/CreateUser.js";
import DeleteUser from "../controller/DeleteUser.js";
import findUser from "../controller/Finduser.js";
import fetchUser from "../controller/GetUser.js";
import updateUser from "../controller/UpdateUser.js";
 
const router = express.Router();


router.post("/adduser",addUser);
router.get("/alluser",fetchUser);
router.get("/:id",findUser)
router.post("/:id",updateUser)
router.delete("/:id",DeleteUser)

export default router;