export class Paginator {
  constructor(
    private readonly _unit: string,
    private readonly _first: number,
    private readonly _last: number,
    private readonly _length: number
  ) {
  }

  get unit() {
    return this._unit;
  }

  get first() {
    return this._first;
  }

  get last() {
    return this._last
  }

  get length() {
    return this._length;
  }


  get data() {
    return {
      unit: this.unit,
      first: this.first,
      last: this.last,
      length: this.length
    };
  }

  static fromData(data: Paginator['data']) {
    return new Paginator(
      data.unit,
      data.first,
      data.last,
      data.length
    );
  }
}