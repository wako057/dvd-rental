import { Router, Request, Response } from "express";
import { FilmController } from "./film.controller";
import { FilmRepositoryInmemory } from "./film.repository.inmemory";
import { FilmsPresenterDefault } from "../application/films.presenter.default";
import {FilmRepositoryPostgres} from "./film.repository.postgres";
import knex from "./knexInstance";
const router = Router();

// const repository = new FilmRepositoryInmemory();
const repository = new FilmRepositoryPostgres(knex);
const filmsPresenter = new FilmsPresenterDefault();
const filmController = new FilmController(repository, filmsPresenter);

router.get("/films", (req: Request, res: Response) =>
  filmController.getFilms(req, res),
);

export default router;
