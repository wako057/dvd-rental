// import {Paginator} from "../infra/film.repository.inmemory";
import { Paginator } from "../domain/paginator";
import { Film } from "../domain/film";

export abstract class FilmRepository {
  abstract getFilms(paginator?: Paginator): Promise<Film[]>;
  abstract addFilm(film: Film): Promise<void>;
}
