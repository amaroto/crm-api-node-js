import { NextFunction, Request, Response } from "express";
import { Criteria } from "../../../shared/domain/criteria/Criteria";
import { Filters } from "../../../shared/domain/criteria/Filters";
import { Order } from "../../../shared/domain/criteria/Order";
import { OrderBy } from "../../../shared/domain/criteria/OrderBy";
import {
  OrderType,
  OrderTypes,
} from "../../../shared/domain/criteria/OrderType";

import { UserUseCase } from "../../application/userUseCase";

export class UserController {
  constructor(private userUseCase: UserUseCase) {
    this.create = this.create.bind(this);
    this.find = this.find.bind(this);
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
    this.search = this.search.bind(this);
  }

  public async find({ params }: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).send(await this.userUseCase.find(`${params.id}`));
    } catch (error) {
      next(error);
    }
  }

  public async search({ query }: Request, res: Response, next: NextFunction) {
    try {
      const criteria = new Criteria(
        new Filters([]),
        new Order(new OrderBy("id"), new OrderType(OrderTypes.ASC))
      );

      res.status(200).send(await this.userUseCase.search(criteria));
    } catch (error) {
      next(error);
    }
  }

  public async create({ body }: Request, res: Response, next: NextFunction) {
    try {
      await this.userUseCase.create(body);
      res.status(201).send();
    } catch (error) {
      next(error);
    }
  }

  public async update(
    { body, params }: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      await this.userUseCase.update(params.id, body);
      res.status(201).send();
    } catch (error) {
      next(error);
    }
  }

  public async delete({ params }: Request, res: Response, next: NextFunction) {
    try {
      await this.userUseCase.delete(params.id);
      res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
