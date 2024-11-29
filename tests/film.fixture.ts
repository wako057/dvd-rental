import {FilmRepositoryInmemory} from "../src/infra/film.repository.inmemory";
import {Film} from "../src/domain/film";

export const createFilmFixture = () => {
  const filmRepository = new FilmRepositoryInmemory();

  return {
    givenExistingFilms(filmsJSON: any[]) {
      filmsJSON.map(film => filmRepository.addFilm(Film.fromData(film)));
    },
    async thenCallingPageShouldProvideResults(expectedResult: Film[]) { // il faut faire appel a l'api

      const filmsFromRepo = await filmRepository.getFilms();
      expect(filmsFromRepo).toEqual(expectedResult);

    }
  };
};


export type FilmFixture = ReturnType<typeof createFilmFixture>