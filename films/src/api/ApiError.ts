import { ApiErrorData } from './types'

class ApiError<T = any> extends Error {
  public isNetworkError: boolean

  public errorData: T

  constructor(message: string, error: ApiErrorData<T>) {
    super(message)

    const { isNetworkError, errorData } = error

    this.errorData = errorData
    this.isNetworkError = isNetworkError
  }
}

export { ApiError }
