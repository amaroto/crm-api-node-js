import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import UserModel from "../model/user.schema.mongo";

export class MongoRepository implements UserRepository {
  async find(id: string): Promise<any> {
    return await UserModel.findOne({ id });
  }
  async create(user: UserEntity): Promise<any> {
    return await UserModel.create(user);
  }
  async search(): Promise<any> {
    return await UserModel.find();
  }
}
