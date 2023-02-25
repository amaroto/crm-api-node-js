import { Router } from "express";
import { UserUseCase } from "../../application/userUseCase";
import { UserController } from "../controller/user.controller";
import { MySqlRepository } from "../repository/mysql.repository";

const route = Router();

const userCtrl = new UserController(new UserUseCase(new MySqlRepository()));

route.post(`/user`, userCtrl.create);
route.get(`/user`, userCtrl.find);

export default route;
