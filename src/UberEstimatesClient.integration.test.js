import dotenv from 'dotenv';

import UberEstimatesClient from './index';

dotenv.config();

describe('UberEstimatesClient', () => {
  let client;
  const startLatitude = 40.7127837;
  const endLongitude = -74.00594130000002;
  const startLatitude1 = 40.758895;
  const endLongitude1 = -73.9873197;

  const start = {
    latitude: startLatitude,
    longitude: endLongitude,
  };

  const end = {
    latitude: startLatitude1,
    longitude: endLongitude1,
  };

  beforeEach(() => {
    client = new UberEstimatesClient({ serverToken: process.env.SERVER_TOKEN });
  });

  describe('#getPrices', () => {
    it('gets prices', async () => {
      const prices = await client.getPrices({ start, end });
      expect(prices).toBeDefined();
    });
  });

  describe('#getArrivalTimes', () => {
    it('gets arrival times', async () => {
      const prices = await client.getArrivalTimes({ start, end });
      expect(prices).toBeDefined();
    });
  });
});
