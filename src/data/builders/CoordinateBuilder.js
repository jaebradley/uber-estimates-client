'use es6';

import Coordinate from '../Coordinate';

export default class CoordinateBuilder {
  static build(coordinate) {
    if (!('latitude' in coordinate)) {
      throw new ReferenceError('missing latitude field');
    }

    if (!('longitude' in coordinate)) {
      throw new ReferenceError('missing longitude field');
    }

    if (!CoordinateBuilder.isNumeric(coordinate['latitude'])) {
      throw new TypeError('latitude is non-numeric');
    }

    if (!CoordinateBuilder.isNumeric(coordinate['longitude'])) {
      throw new TypeError('longitude is non-numeric');
    }

    return new Coordinate({
      latitude: coordinate['latitude'],
      longitude: coordinate['longitude']
    });
  }

  static isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
}
