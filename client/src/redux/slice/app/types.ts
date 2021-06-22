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
  LOGIN = 'APP/USER/LOGIN',
  REGISTRATION = 'APP/USER/REGISTRATION',
}

export { AppActionTypes }
export type { AppState }
