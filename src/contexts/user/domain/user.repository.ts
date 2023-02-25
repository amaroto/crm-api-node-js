import { UserEntity } from "./user.entity";

export interface UserRepository {
  find(id: string): Promise<UserEntity | null>;
  create(user: UserEntity): Promise<any>;
  update(user: UserEntity): Promise<any>;
  search(): Promise<UserEntity[] | null>;
  delete(id: string): Promise<any>;
}
