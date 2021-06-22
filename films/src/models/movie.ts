type MovieType = {
  id: number
  original_title: string
  original_language: string
  overview: string
  release_date: string
  title: string
  vote_average: number
  adult: boolean
  genre_ids: number[]
  popularity: number
  vote_count: number
  video: boolean
  poster_path: string | null
  backdrop_path: string | null
}

const movieMockNowYouSee: MovieType = {
  poster_path: '/A81kDB6a1K86YLlcOtZB27jriJh.jpg',
  adult: false,
  overview:
    'One year after outwitting the FBI and winning the public’s adulation with their mind-bending spectacles, the Four Horsemen resurface only to find themselves face to face with a new enemy who enlists them to pull off their most dangerous heist yet.',
  release_date: '2016-06-02',
  genre_ids: [28, 12, 35, 80, 9648, 53],
  id: 291805,
  original_title: 'Now You See Me 2',
  original_language: 'en',
  title: 'Now You See Me 2',
  backdrop_path: '/zrAO2OOa6s6dQMQ7zsUbDyIBrAP.jpg',
  popularity: 29.737342,
  vote_count: 684,
  video: false,
  vote_average: 6.64,
}

const moviewMockSuicide: MovieType = {
  poster_path: '/xFw9RXKZDvevAGocgBK0zteto4U.jpg',
  adult: false,
  overview:
    'From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.',
  release_date: '2016-08-03',
  genre_ids: [14, 28, 80],
  id: 297761,
  original_title: 'Suicide Squad',
  original_language: 'en',
  title: 'Suicide Squad',
  backdrop_path: '/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg',
  popularity: 48.261451,
  vote_count: 1466,
  video: false,
  vote_average: 5.91,
}

export { movieMockNowYouSee, moviewMockSuicide }
export type { MovieType }
