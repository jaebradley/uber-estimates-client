'use es6';

import {Map} from 'immutable';

import Coordinate from '../../data/Coordinate';
import CoordinateBuilder from '../../data/builders/CoordinateBuilder';
import TimeEstimatesSearch from '../TimeEstimatesSearch';

export default class TimeEstimatesSearchBuilder {
  static build(json) {
    if (!('start' in json)) {
      throw new TypeError('start is not in the search');
    }

    let args = Map();
    if ('productId' in json) {
      if (typeof json['productId'] !== 'string') {
        throw new TypeError('product id is not a string');
      }
      args = args.set('productId', json['productId']);
    }

    args = args.set('start', CoordinateBuilder.build(json['start']));

    return new TimeEstimatesSearch(args);
  }
}
