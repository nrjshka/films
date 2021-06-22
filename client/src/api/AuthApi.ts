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

  public login(params: { email: string; password: string }) {
    return this.api.post('/auth', params)
  }
}

const api = new ApiService('http://localhost:3000')
const authApi = new AuthApi(api)

export { AuthApi, authApi }
