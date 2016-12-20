'use es6';

import {Record} from 'immutable';

import Coordinate from '../data/Coordinate';

let defaults = {
  startCoordinate: new Coordinate(),
  endCoordinate: new Coordinate(),
  seatCount: 2,
};

export default class PriceEstimatesSearch extends Record(defaults) {
}
