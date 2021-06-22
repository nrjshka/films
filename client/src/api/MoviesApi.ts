import { api, ApiService } from './ApiService'

import { TMDB_API_KEY } from '../utils'

import { PopularMoviesResponse, SearchMoviesResponse, MovieVideosResponse } from './types'

class MovieApi {
  private api: ApiService

  constructor(api: ApiService) {
    this.api = api

    // this.api.addQuery({ api_key: TMDB_API_KEY })
  }

  public getPopularMovies = (): Promise<PopularMoviesResponse> => this.api.get('/film/popular')

  public getSearchResults = (filter: string): Promise<SearchMoviesResponse> =>
    this.api.get('/film', { params: { filter } })

  public getMovieTrailer = (movieId: number): Promise<MovieVideosResponse> => this.api.get(`/movie/${movieId}/videos`)
}

const movieApi = new MovieApi(api)

export { MovieApi, movieApi }
