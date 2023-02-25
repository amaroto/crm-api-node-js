import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import UserModel from "../model/sequelize/user.schema.sequelize";

export class MySqlRepository implements UserRepository {
  async find(id: string): Promise<any> {
    return await UserModel.findByPk(id);
  }
  
  async create(user: UserEntity): Promise<any> {
    await UserModel.create(user);
  }

  async search(): Promise<any> {}
}
