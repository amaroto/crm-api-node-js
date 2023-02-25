export interface UserEntity {
  id: string;
  name: string | null;
  firstname: string | null;
  lastname: string | null;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
