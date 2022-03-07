import { AxiosResponse } from "axios";
import { ILoginRequest, IAuthResponse, IRefreshRequest } from "../../domain/auth";
import api from "./api.config";


class AuthService {
  static login(data: ILoginRequest){
    return api.post<IAuthResponse, AxiosResponse<IAuthResponse>>('/auth/login', data)
  }

  static refresh(data: IRefreshRequest) {
    return api.post<IAuthResponse, AxiosResponse<IAuthResponse>>('auth/token', data)
  } 
}

export default AuthService 