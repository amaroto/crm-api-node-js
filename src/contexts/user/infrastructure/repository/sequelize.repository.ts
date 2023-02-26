import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import UserModel from "../model/sequelize/user.schema.sequelize";

export class SequelizeRepository implements UserRepository {
  async delete(id: string): Promise<any> {
    return await UserModel.delete(id);
  }

  async find(id: string): Promise<any> {
    return await UserModel.findByPk(id);
  }

  async create(user: UserEntity): Promise<any> {
    return UserModel.create(user);
  }

  async update(user: UserEntity): Promise<any> {
    console.debug(user);
    const userDB = await UserModel.findByPk(user.id);
    return await userDB.update(user);
  }

  async search(): Promise<any> {
    const { count, rows } = await UserModel.findAndCountAll({
      where: {},
      offset: 10,
      limit: 2,
    });

    return {
      data: rows,
      totalRows: count,
    };
  }
}
