import { CategoryType } from '../models'
import { api, ApiService } from './ApiService'

class CategoriesApi {
  private api: ApiService

  constructor(api: ApiService) {
    this.api = api
  }

  public getAllCategories(): Promise<CategoryType[]> {
    return this.api.get('/category')
  }
}

const categoriesApi = new CategoriesApi(api)

export { categoriesApi, CategoriesApi }
