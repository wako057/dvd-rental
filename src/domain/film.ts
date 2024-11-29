export class Film {
  constructor(
    private readonly _film_id: number,
    private readonly _title: string,
    private readonly _description: string,
    private readonly _release_year: number,
    private readonly _language_id: number,
    private readonly _rental_duration: number,
    private readonly _rental_rate: number,
    private readonly _length: number,
    private readonly _replacement_cost: number,
    private readonly _rating: string,
    private readonly _last_update: Date,
    private readonly _special_features: string[],
    private readonly _fulltext: string,
  ) {}

  get data() {
    return {
      film_id: this.film_id,
      title: this.title,
      description: this.description,
      release_year: this.release_year,
      language_id: this.language_id,
      rental_duration: this.rental_duration,
      rental_rate: this.rental_rate,
      length: this.length,
      replacement_cost: this.replacement_cost,
      rating: this.rating,
      last_update: this.last_update,
      special_features: this.special_features,
      fulltext: this.fulltext,
    };
  }

  static fromData(data: Film["data"]) {
    return new Film(
      data.film_id,
      data.title,
      data.description,
      data.release_year,
      data.language_id,
      data.rental_duration,
      data.rental_rate,
      data.length,
      data.replacement_cost,
      data.rating,
      new Date(data.last_update),
      data.special_features,
      data.fulltext,
    );
  }

  get film_id() {
    return this._film_id;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get release_year() {
    return this._release_year;
  }

  get language_id() {
    return this._language_id;
  }

  get rental_duration() {
    return this._rental_duration;
  }

  get rental_rate() {
    return this._rental_rate;
  }

  get length() {
    return this._length;
  }

  get replacement_cost() {
    return this._replacement_cost;
  }

  get rating() {
    return this._rating;
  }

  get last_update() {
    return this._last_update.toISOString();
  }

  get special_features() {
    return this._special_features;
  }

  get fulltext() {
    return this._fulltext;
  }
}
