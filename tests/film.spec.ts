import { createFilmFixture, FilmFixture } from "./film.fixture";
import FILM_LISTING from "./films.json";
import { Film } from "../src/domain/film";
import request from "supertest";

describe("Listing the films", () => {
  let fixture: FilmFixture;

  beforeEach(() => {
    fixture = createFilmFixture();
  });

  it("List the first page - no paginator", async () => {
    const films = FILM_LISTING.map((film) => Film.fromData(film));

    fixture.givenExistingFilms(films);
    // fixture.thenCallingPageShouldProvideResults(films);
    const response = await request(app).get("/space/destinations");
  });

  // it("List the first page - pagination activated", () => {
  //   const films = FILM_LISTING.map(film => Film.fromData(film));
  //   fixture.givenExistingFilms(films);
  //
  // })
});
