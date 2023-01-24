export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  cellphone: string;
  address: string;
}

export interface IUserCreateResponse extends IUserCreate {
  id: string;
  created_at: Date;
  update_at: Date;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  cellphone?: string;
  address?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
