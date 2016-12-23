'use es6';

import rp from 'request-promise';

import CoordinateBuilder from './data/builders/CoordinateBuilder';
import PriceEstimatesSearchBuilder from './search/builders/PriceEstimatesSearchBuilder';
import Subpath from './data/Subpath';
import TimeEstimatesSearchBuilder from './search/builders/TimeEstimatesSearchBuilder';

export default class UberClient {
  constructor(serverToken) {
    this.serverToken = serverToken;
  }

  getProducts(coordinate) {
    return this.execute(Subpath.PRODUCTS,
                        CoordinateBuilder.build(coordinate)
                                         .toJS());
  }

  getPriceEstimates(search) {
    return this.execute(Subpath.PRICE_ESTIMATES,
                        PriceEstimatesSearchBuilder.build(search)
                                                   .toParameters()
                                                   .toJS());
  }

  getTimeEstimates(search) {
    return this.execute(Subpath.TIME_ESTIMATES,
                        TimeEstimatesSearchBuilder.build(search)
                                                  .toParameters()
                                                  .toJS());
  }

  execute(subpath, parameters) {
    return rp(this.buildOptions(subpath, parameters))
              .then(result => result)
              .catch(function(err) {
                throw new Error(err);
              });
  }

  buildOptions(subpath, parameters) {
    return {
      uri: `https://api.uber.com/v1.2/${subpath.value}`,
      qs: parameters,
      headers: {
        Authorization: `Token ${this.serverToken}`
      },
      json: true,
      timeout: 5000
    };
  }
}
