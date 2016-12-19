'use es6';

import rp from 'request-promise';

import Subpath from '../data/Subpath';

export default class UberClient {
  constructor(serverToken) {
    this.serverToken = serverToken;
  }

  getProducts(coordinates) {
    return execute(Subpath.PRODUCTS, coordinates);
  }

  execute(subpath, coordinates) {
    return rp(this.buildOptions(subpath, coordinates))
              .then(result => console.log(result))
              .catch(err => throw new Error(err));
  }

  buildOptions(subpath, coordinates) {
    return {
      uri: `https://api.uber.com/v1.2/${subpath.value}`,
      qs: {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude
      },
      headers: {
        Authorization: `Bearer ${this.serverToken}`
      },
      json: true
    };
  }
}
