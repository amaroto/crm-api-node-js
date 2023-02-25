import { v4 as uuid } from "uuid";
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
    name,
    firstname,
    lastname,
    email,
  }: {
    name: string;
    firstname: string;
    lastname: string;
    email: string;
  }) {
    this.id = uuid();
    this.name = name;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }
}
