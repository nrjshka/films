import { MovieType } from '../models'
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

  public registration(params: { email: string; password: string; fullName: string }) {
    return this.api.post('/users', params)
  }

  public editFilm(id: string, data: Partial<MovieType>) {
    return this.api.post('/film/edit', { id, ...data })
  }

  public createFilm(data: Partial<MovieType>) {
    return this.api.post('/film', data)
  }
}

const api = new ApiService('http://localhost:3000')
const authApi = new AuthApi(api)

export { AuthApi, authApi }
