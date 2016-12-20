'use es6';

import {Map, Record} from 'immutable';

import Coordinate from '../data/Coordinate';

let defaults = {
  start: new Coordinate(),
  productId: undefined,
};

export default class TimeEstimatesSearch extends Record(defaults) {
  toParameters(search) {
    return Map({
      start_latitude: this.start.latitude,
      start_longitude: this.start.longitude,
      product_id: this.productId,
    });
  }
}
