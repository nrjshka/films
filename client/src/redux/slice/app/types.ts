type AppState = {
  isLoading: boolean
  user: {
    isAuthorized: boolean
    token: string | null
  }
}

enum AppActionTypes {
  LOAD = 'APP/LOAD',
  TOKEN = 'APP/USER/TOKEN',
  LOGIN = 'APP/USER/LOGIn',
}

export { AppActionTypes }
export type { AppState }
