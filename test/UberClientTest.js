'use es6';

import dotenv from 'dotenv';

import {expect} from 'chai';

import {UberClient} from '../src/index';

dotenv.load();

describe('Test Uber Client', function() {
  let client = new UberClient(process.env.SERVER_TOKEN);
  let latitude = 40.7127837;
  let longitude = -74.00594130000002;
  let latitude1 = 40.758895;
  let longitude1 = -73.9873197;
  let coordinate = {
    latitude: latitude,
    longitude: longitude,
  };
  let priceEstimatesSearch = {
    start: {
      latitude: latitude,
      longitude: longitude
    },
    end: {
      latitude: latitude1,
      longitude: longitude1
    }
  };

  it('tests product fetch', function() {
    return client.getProducts(coordinate)
                 .then(response => console.log(response));
  });

  it('tests price estimates fetch', function() {
    return client.getPriceEstimates(priceEstimatesSearch)
                 .then(response => console.log(response));
  });
});
