type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type IParams<T> = {
  url: string;
  method: Methods;
  data: T;
  [propname: string]: any;
}

export type LoginParams = {
  username: string;
  password: string;
}

export type LoginResponse = {
  success: boolean;
  token: string;
}