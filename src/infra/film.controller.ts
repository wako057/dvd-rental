import { Request, Response } from "express";
import { FilmRepository } from "../application/film.repository";
import FILM_LISTING from "../../tests/films.json";
import { Film } from "../domain/film";
import { FilmsPresenter } from "../application/films.presenter";

export class FilmController {
  constructor(
    private readonly filmRepository: FilmRepository,
    private readonly filmsPresenter: FilmsPresenter,
  ) {}

  async getFilms(req: Request, res: Response): Promise<void> {
    // FILM_LISTING.map((film) =>
    //   this.filmRepository.addFilm(Film.fromData(film)),
    // );
    console.log('paginator: ', req.pagination);
    const films = await this.filmRepository.getFilms(req.pagination);
    req.logger.error(JSON.stringify(req.pagination));
    req.logger.warn(`Header content range: ${JSON.stringify(req.headers)}`);

    req.logger.info(JSON.stringify(films));
    const presentation = this.filmsPresenter.show(films);
    await res.setHeader('Content-Range',  `items ${req.pagination.offset}-${req.pagination.offset+films.length-1}`).json(presentation);
  }
}
