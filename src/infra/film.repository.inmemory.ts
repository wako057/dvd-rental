import { FilmRepository} from "../application/film.repository";
import {Film} from "../domain/film";

export type Paginator = {
  seek: number,
  nbItems: number
}


export class FilmRepositoryInmemory implements FilmRepository {
  private films = new Map<string, Film>();

  private getHashFormFilm(film: Film) {
    return `${film.release_year}-${film.title}`;
  }

  async getFilms(paginator?: Paginator): Promise<Film[]> {
    return Array.from(this.films.values());
  }

  async addFilm(film: Film) {
      this.films.set(
        this.getHashFormFilm(film),
        film
      )
  }
}