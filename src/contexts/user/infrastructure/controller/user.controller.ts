import { Request, Response } from "express";
import { UserUseCase } from "../../application/userUseCase";

export class UserController {
  constructor(private userUseCase: UserUseCase) {
    this.create = this.create.bind(this);
    this.find = this.find.bind(this);
  }

  public async find({ query }: Request, res: Response) {
    const { id = "" } = query;
    const user = await this.userUseCase.find(`${id}`);
    res.send({ user });
  }

  public async create({ body }: Request, res: Response) {
    const user = await this.userUseCase.create(body);
    res.send({ user });
  }
}
