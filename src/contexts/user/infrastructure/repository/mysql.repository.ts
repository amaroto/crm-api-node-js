import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import UserModel from "../model/sequelize/user.schema.sequelize";

export class MySqlRepository implements UserRepository {
  async delete(id: string): Promise<any> {
    throw new Error("Method not implemented.");
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

  async search(): Promise<any> {}
}
