import { Client } from 'pg';
import {FilmRepository} from "../application/film.repository";
import {Film} from "../domain/film";
import {Paginator} from "../domain/paginator";
import {FilmModel} from "../domain/film.model";


interface FilmData {
    film_id: number;
    title: string;
    description: string;
    release_year: number;
    language_id: number;
    rental_duration: number;
    rental_rate: number;
    length: number;
    replacement_cost: number;
    rating: string;
    last_update: string;
    special_features: string;
    fulltext: string;
}

export class FilmRepositoryPostgres implements FilmRepository {
    constructor(private readonly knex: any) {
    }
    addFilm(film: Film): Promise<void> {
        return Promise.resolve(undefined);
    }

    async getFilms(paginator: Paginator): Promise<Film[]> {
        const results = await this.knex('film').select().orderBy('film_id').limit(paginator.limit).offset(paginator.offset) as FilmData[];

        return results.map(result => Film.fromData({
            film_id: result.film_id,
            title: result.title,
            description: result.description,
            release_year: result.release_year,
            language_id: result.language_id,
            rental_duration: result.rental_duration,
            rental_rate: result.rental_rate,
            length: result.length,
            replacement_cost: result.replacement_cost,
            rating: result.rating,
            last_update: result.last_update,
            special_features: result.special_features,
            fulltext: result.fulltext
        }));
        // console.table(blu);
        // return Promise.resolve([]);
    }

}