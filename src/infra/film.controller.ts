import { Request, Response } from "express";
import {FilmRepository} from "../application/film.repository";
import FILM_LISTING from '../../tests/films.json';
import {Film} from "../domain/film";
import {FilmsPresenter} from "../application/films.presenter";

export class FilmController {
  constructor(
    private readonly filmRepository: FilmRepository,
    private readonly filmsPresenter: FilmsPresenter
  ) {

  }

  async getFilms(req: Request, res: Response): Promise<void> {

    FILM_LISTING.map(film => this.filmRepository.addFilm(Film.fromData(film)));
    const films = await this.filmRepository.getFilms();

    console.log(JSON.stringify(films));
    const presentation = this.filmsPresenter.show(films);
    console.log('Presetation films: ', presentation);
    await res.json(presentation);
  }
}