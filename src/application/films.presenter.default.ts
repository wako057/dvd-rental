import {FilmsPresenter} from "./films.presenter";
import {Film} from "../domain/film";


export class FilmsPresenterDefault implements FilmsPresenter {
  show(films: Film[]): {id: number, title: string, description: string}[] {
    return films.map(film => ({
      id: film.film_id,
      title: film.title,
      description: film.description,
      release_year: film.release_year,
      language_id: film.language_id,
      rental_duration: film.rental_duration,
      rental_rate: film.rental_rate,
      length: film.length,
      replacement_cost: film.replacement_cost,
      rating: film.rating,
      last_update: film.last_update,
      special_features: film.special_features,
    }));
  }

}