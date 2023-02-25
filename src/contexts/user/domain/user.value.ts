import { UserEntity } from "./user.entity";

export class UserValue implements UserEntity {
  id: string;
  name: string;
  firstname: string;
  lastname: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id,
    name,
    firstname,
    lastname,
    email,
  }: {
    id: string;
    name: string;
    firstname: string;
    lastname: string;
    email: string;
  }) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }
}
