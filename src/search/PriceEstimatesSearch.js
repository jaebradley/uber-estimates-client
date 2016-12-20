'use es6';

import {Map, Record} from 'immutable';

import Coordinate from '../data/Coordinate';

let defaults = {
  start: new Coordinate(),
  end: new Coordinate(),
  seatCount: 2,
};

export default class PriceEstimatesSearch extends Record(defaults) {
  toParameters(search) {
    return Map({
      start_latitude: this.start.latitude,
      start_longitude: this.start.longitude,
      end_latitude: this.end.latitude,
      end_longitude: this.end.longitude,
      seat_count: this.seatCount
    });
  }
}
