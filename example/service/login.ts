import { IParams, LoginResponse, LoginParams } from './type';
import { loginResponse } from '../mock/login';
import { sleep } from './utils';

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