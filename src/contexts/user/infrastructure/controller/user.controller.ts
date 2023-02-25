import { Request, Response } from "express";
import { UserUseCase } from "../../application/userUseCase";

export class UserController {
  constructor(private userUseCase: UserUseCase) {
    this.create = this.create.bind(this);
    this.find = this.find.bind(this);
  }

  public async find({ params }: Request, res: Response) {
    try {
      res.status(200).send(await this.userUseCase.find(`${params.id}`));
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async search({ query }: Request, res: Response) {
    try {
      res.status(200).send(await this.userUseCase.find(`${query.id}`));
    } catch (error) {
      res.status(500).send(error);
    }
  }

  public async create({ body }: Request, res: Response) {
    try {
      await this.userUseCase.create(body);
      res.status(201).send();
    } catch (error) {
      const errors = error.errors.map((e: any) => e.message);
      res.status(500).send({ error: errors });
    }
  }

  public async update({ body, params }: Request, res: Response) {
    try {
      await this.userUseCase.update(params.id, body);
      res.status(201).send();
    } catch (error) {
      // const errors = error.errors.map((e: any) => e.message);
      res.status(500).send(error);
    }
  }

  public async delete({ params }: Request, res: Response) {
    try {
      await this.userUseCase.delete(params.id);
      res.status(201).send();
    } catch (error) {
      const errors = error.errors.map((e: any) => e.message);
      res.status(500).send({ error: errors });
    }
  }
}
