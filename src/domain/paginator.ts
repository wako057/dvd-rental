export class Paginator {
  constructor(
    private readonly _unit: string,
    private readonly _limit: number,
    private readonly _offset: number,
  ) {}

  get unit() {
    return this._unit;
  }

  get limit() {
    return this._limit;
  }

  get offset() {
    return this._offset;
  }

  get data() {
    return {
      unit: this.unit,
      limit: this.offset,
      offset: this.offset,
    };
  }

  static fromData(data: Paginator["data"]) {
    return new Paginator(data.unit, data.limit, data.offset);
  }
}
// export class Paginator {
//   constructor(
//       private readonly _unit: string,
//       private readonly _first: number,
//       private readonly _last: number,
//       private readonly _length: number,
//   ) {}
//
//   get unit() {
//     return this._unit;
//   }
//
//   get first() {
//     return this._first;
//   }
//
//   get last() {
//     return this._last;
//   }
//
//   get length() {
//     return this._length;
//   }
//
//   get data() {
//     return {
//       unit: this.unit,
//       first: this.first,
//       last: this.last,
//       length: this.length,
//     };
//   }
//
//   static fromData(data: Paginator["data"]) {
//     return new Paginator(data.unit, data.first, data.last, data.length);
//   }
// }
