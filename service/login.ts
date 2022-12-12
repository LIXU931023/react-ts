import { IParams, LoginResponse, LoginParams } from './type';
import { loginResponse } from '../mock/login';

const sleep = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));

const getResponseData = (params: IParams<LoginParams>) => {
  return loginResponse[params.url];
}

export const loginUser = async(params: LoginParams):Promise<LoginResponse> => {
  await sleep(500);
  return getResponseData({
    method: 'POST',
    url: '/login',
    data: params
  })
}