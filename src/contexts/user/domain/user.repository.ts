import { UserEntity } from "./user.entity";

export interface UserRepository {
  find(id: string): Promise<UserEntity | null>;
  create(user: UserEntity): Promise<UserEntity | null>;
  search(): Promise<UserEntity[] | null>;
}
