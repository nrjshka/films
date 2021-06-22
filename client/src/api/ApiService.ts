import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios'

import { API_PREFIX } from '../utils'
import { ApiError } from './ApiError'
import { ApiHeaders, ErrorResponse, ApiQuery } from './types'

class ApiService {
  /**
   * Api Instance
   */
  private api: AxiosInstance

  /**
   * Emdpoint API
   */
  private endpoint: string | undefined

  /**
   * Response headers
   */
  private headersDict: Partial<ApiHeaders> = { 'Content-Type': 'application/json' }

  private queryDict: Partial<ApiQuery> = {}

  constructor(endpoint?: string) {
    this.endpoint = endpoint || '/'

    this.api = axios.create({
      baseURL: this.endpoint,
    })
  }

  private responseHandler = <T>(response: AxiosResponse<T>): T => {
    const { data } = response

    return data
  }

  private errorHandler = (e: AxiosError<ErrorResponse>): ApiError => {
    const message = e?.message || 'Unknown Error'

    const isNetworkError = message === 'Network Error'

    throw new ApiError(message, {
      isNetworkError,
      errorData: e.response?.data,
    })
  }

  public addHeaders = (newHeaders: Partial<ApiHeaders>): void => {
    this.headersDict = {
      ...this.headersDict,
      ...newHeaders,
    }
  }

  public addQuery = (newQuery: Partial<ApiQuery>) => {
    this.queryDict = {
      ...this.queryDict,
      ...newQuery,
    }
  }

  public post = <T>(
    method: string,
    params: Record<string, any> = {},
    config: AxiosRequestConfig = { headers: {} },
  ): Promise<T> =>
    this.api
      .post<T>(method, params, {
        ...config,
        headers: { ...this.headersDict, ...(config.headers as Partial<ApiHeaders>) },
      })
      .then(this.responseHandler)
      .catch(this.errorHandler) as Promise<T>

  public get = <T>(method: string, config: AxiosRequestConfig = { headers: {} }): Promise<T> =>
    this.api
      .get<T>(method, {
        ...config,
        headers: { ...this.headersDict, ...(config.headers as Partial<ApiHeaders>) },
        params: {
          ...this.queryDict,
          ...config.params,
        },
      })
      .then(this.responseHandler)
      .catch(this.errorHandler) as Promise<T>
}

const api = new ApiService(process.env.BACKEND_URL) // change

export { ApiService, api }
