'use es6';

import {Map} from 'immutable';

import Coordinate from '../../data/Coordinate';
import CoordinateBuilder from '../../data/builders/CoordinateBuilder';
import PriceEstimatesSearch from '../PriceEstimatesSearch';

export default class PriceEstimatesSearchBuilder {
  static build(json) {
    if (!('start' in json)) {
      throw new TypeError('start is not in the search');
    }

    if (!('end' in json)) {
      throw new TypeError('end is not in the search');
    }

    let args = Map();
    if ('seatCount' in json) {
      let seatCount = PriceEstimatesSearchBuilder.validateSeatCount(json['seatCount']);
      args = args.set('seatCount', seatCount);
    }

    let startCoordinate = CoordinateBuilder.build(json['start']);
    let endCoordinate = CoordinateBuilder.build(json['end']);

    args = args.set('start', startCoordinate);
    args = args.set('end', endCoordinate);

    return new PriceEstimatesSearch(args);
  }

  static validateSeatCount(json) {
    if (!Number.isInteger(json)) {
      throw new TypeError('seatCount is not an integer');
    }

    let seatCount = json['seatCount'];

    // https://developer.uber.com/docs/riders/references/api/v1.2/estimates-price-get
    if (seatCount < 1) {
      throw new RangeError('seatCount must be non-zero');
    }

    if (seatCount > 2) {
      throw new RangeError('seatCount max value is 2');
    }

    return seatCount;
  }
}
