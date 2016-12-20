'use es6';

import {Enum} from "enumify";

export default class Subpath extends Enum {}
Subpath.initEnum({
  PRODUCTS: {
    value: 'products',
  },
  PRICE_ESTIMATES: {
    value: 'estimates/price',
  },
  TIME_ESTIMATES: {
    value: 'estimates/time',
  },
});
