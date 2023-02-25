import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";

const MOCK_USER = {
  name: "Leifer",
  firstname: "hola",
  lastname: "awdwa",
  email: "ad",
  id: "000-000",
};

export class MockRepository implements UserRepository {
  async find(id: string): Promise<any> {
    const user = MOCK_USER;
    return user;
  }
  async create(userIn: UserEntity): Promise<any> {
    const user = MOCK_USER;
    return user;
  }
  async search(): Promise<any> {
    const users = [MOCK_USER, MOCK_USER, MOCK_USER];
    return users;
  }
}
