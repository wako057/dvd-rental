import {FilmRepositoryInmemory} from "../src/infra/film.repository.inmemory";
import {Film} from "../src/domain/film";

export const createFilmFixture = () => {
  const filmRepository = new FilmRepositoryInmemory();

  return {
    getMockedData(filmsJSON: any[]): Film[] {
      return filmsJSON.map(film => ({
        ...film,
        last_update: new Date(film.last_update)
      }))
    },
    givenExistingFilms(filmsJSON: any[]) {
      const films = this.getMockedData(filmsJSON);
      films.map(film => filmRepository.addFilm(film));
    },
    thenCallingFirstPageShouldProvideResults() {
      // @tood implement
    }
  };
};


export type FilmFixture = ReturnType<typeof createFilmFixture>