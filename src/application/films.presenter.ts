import {Film} from "../domain/film";

export interface FilmsPresenter {
  show(films: Film[]): void;
}