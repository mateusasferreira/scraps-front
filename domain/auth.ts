interface ILoginRequest {
  email: string
  password: string
}

interface IRefreshRequest {
  token: string
}

interface IAuthResponse {
  auth: boolean, 
  accessToken: string,
  refreshToken: string
}

export type {
  ILoginRequest,
  IAuthResponse,
  IRefreshRequest
}