import { Router } from "express";
import { UserUseCase } from "../../application/userUseCase";
import { UserController } from "../controller/user.ctrl";
import { MySqlRepository } from "../repository/mysql.repository";

const route = Router();

const userCtrl = new UserController(new UserUseCase(new MySqlRepository()));

route.post(`/user`, userCtrl.insertCtrl);
route.get(`/user`, userCtrl.getCtrl);

export default route;
