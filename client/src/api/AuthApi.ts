import { ApiService } from './ApiService'

class AuthApi {
  private api: ApiService

  constructor(api: ApiService) {
    this.api = api
  }

  private formatTokenToHeader(token: string) {
    return { Authorization: `Bearer ${token}` }
  }

  public setTokenHeader(token: string) {
    this.api.addHeaders(this.formatTokenToHeader(token))
  }

  public validateToken(token: string) {
    const headers = this.formatTokenToHeader(token)

    return this.api.get('/auth', { headers })
  }
}

const api = new ApiService(process.env.BACKEND_URL)
const authApi = new AuthApi(api)

export { AuthApi, authApi }
