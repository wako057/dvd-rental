import {createFilmFixture, FilmFixture} from "./film.fixture";
import FILM_LISTING from "./films.json";
import {Film} from "../src/domain/film";

describe("Listing the films", () => {
  let fixture: FilmFixture;

  beforeEach(() => {
    fixture = createFilmFixture();
  });

  it("List the first page - no paginator", () => {
    const films = FILM_LISTING.map(film => Film.fromData(film));

    fixture.givenExistingFilms(films);
    fixture.thenCallingFirstPageShouldProvideResults(films);
  })
})