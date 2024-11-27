import express, { Request, Response } from "express";
import {FilmController} from "./film.controller";
import {FilmRepositoryInmemory} from "./film.repository.inmemory";
import {FilmsPresenterDefault} from "../application/films.presenter.default";

const router = express.Router();

const repository = new FilmRepositoryInmemory();
const filmsPresenter = new FilmsPresenterDefault();
const filmController = new FilmController(repository, filmsPresenter);


router.get('/films', (req, res) => filmController.getFilms(req, res));

export default router;