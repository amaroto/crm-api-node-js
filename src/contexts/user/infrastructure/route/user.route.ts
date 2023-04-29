import { Router } from "express";
import { UserUseCase } from "../../application/userUseCase";

import { UserController } from "../controller/user.controller";

const route = Router();

// const controller = new UserController(
//   new UserUseCase(new SequelizeRepository())
// );

const controller = new UserController(new UserUseCase());

route.post(`/user`, controller.create);
route.get(`/user/:id`, controller.find);
route.get(`/user`, controller.search);
route.put(`/user/:id`, controller.update);
route.delete(`/user/:id`, controller.delete);

export default route;
