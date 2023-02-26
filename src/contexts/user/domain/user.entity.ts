
export class UserEntity {
  readonly id: string;
  readonly name?: string;
  readonly firstname?: string;
  readonly lastname?: string;
  readonly email: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor({ id, name, firstname, lastname, email }) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }
}
