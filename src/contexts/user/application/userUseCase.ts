import { UserRepository } from "../domain/user.repository";
import { UserEntity } from "../domain/user.entity";
import { Criteria } from "../../shared/domain/criteria/Criteria";

import { v4 as uuid } from "uuid";

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public create = async ({ name, firstname, lastname, email }) => {
    const id = uuid();

    return await this.userRepository.create(
      new UserEntity({ id, name, firstname, lastname, email })
    );
  };

  public update = async (id: string, { name, firstname, lastname, email }) => {
    return await this.userRepository.update(
      new UserEntity({ id, name, firstname, lastname, email })
    );
  };

  public find = async (id: string) => {
    return await this.userRepository.find(id);
  };

  public search = async (criteria: Criteria) => {
    return await this.userRepository.search(criteria);
  };

  public delete = async (id: string) => {
    return await this.userRepository.delete(id);
  };
}
