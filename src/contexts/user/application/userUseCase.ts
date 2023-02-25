import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public create = async ({ name, firstname, lastname, email }) => {
    return await this.userRepository.create(
      new UserValue({ name, firstname, lastname, email })
    );
  };

  public find = async (id: string) => {
    return await this.userRepository.find(id);
  };
}
