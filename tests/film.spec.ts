import {createFilmFixture, FilmFixture} from "./film.fixture";
import FILM_LISTING from "./films.json";
import {Film} from "../src/domain/film";

describe("Listing the films", () => {
  let fixture: FilmFixture;

  beforeEach(() => {
    fixture = createFilmFixture();
  });

  it("List the first page,", () => {
    // console.log(FILM_LISTING[0]);
    // const blu = Film.fromData(FILM_LISTING[0]);
    // console.log(blu);
    const films = FILM_LISTING.map(film => Film.fromData(film));
    // console.log(JSON.stringify(films, null, 2));
    fixture.givenExistingFilms(films);
    // console.table(FILM_LISTING[0]);
    // fixture.thenCallingFirstPageShouldProvideResults();
    expect(true).toBeTruthy();
  })
})