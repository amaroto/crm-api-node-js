import { Router } from "express";
import { UserUseCase } from "../../application/userUseCase";
import { UserController } from "../controller/user.controller";
import { SequelizeRepository } from "../repository/sequelize.repository";

const route = Router();

const controller = new UserController(
  new UserUseCase(new SequelizeRepository())
);

route.post(`/user`, controller.create);
route.get(`/user/:id`, controller.find);
route.get(`/user`, controller.search);
route.put(`/user/:id`, controller.update);
route.delete(`/user/:id`, controller.delete);

export default route;
