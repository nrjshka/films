import { api, ApiService } from './ApiService'

import { PopularMoviesResponse, SearchMoviesResponse, MovieVideosResponse } from './types'

class MovieApi {
  private api: ApiService

  constructor(api: ApiService) {
    this.api = api
  }

  public getPopularMovies = (): Promise<PopularMoviesResponse> => this.api.get('/film/popular')

  public getSearchResults = (filter: string): Promise<SearchMoviesResponse> =>
    this.api.get('/film', { params: { filter } })

  public getMovieTrailer = (movieId: number): Promise<MovieVideosResponse> => this.api.get(`/movie/${movieId}/videos`)
}

const movieApi = new MovieApi(api)

export { MovieApi, movieApi }
