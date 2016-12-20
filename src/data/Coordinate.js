'use es6';

import {Record}

let defaults = {
  latitude: 0,
  longitude: 0
};

export default class Coordinate extends Record(defaults) {}
