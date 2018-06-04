import axios from 'axios';
import UberEstimatesClient from './';

const response = { data: 'foobar' };
const mockedInstance = jest.fn(() => Promise.resolve(response));

jest.mock('axios', () => ({
  create: jest.fn((() => mockedInstance)),
}));

describe('UberEstimatesClient unit test', () => {
  let client;
  const serverToken = 'serverToken';
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
    axios.create.mockClear();
    mockedInstance.mockClear();
    client = new UberEstimatesClient({ serverToken });
  });

  describe('#constructor', () => {
    it('constructs client', () => {
      expect(client).toBeDefined();
      expect(client.client).toBeDefined();
      expect(client.serverToken).toEqual(serverToken);
      expect(axios.create).toHaveBeenCalledTimes(1);
      expect(axios.create).toHaveBeenCalledWith({
        baseURL: 'https://api.uber.com/v1.2/estimates',
        headers: {
          Authorization: `Token ${serverToken}`,
          'Accept-Language': 'en_US',
        },
      });
    });
  });

  describe('#getPrices', () => {
    it('gets prices', async () => {
      const prices = await client.getPrices({ start, end });
      expect(prices).toEqual('foobar');
      expect(axios.create).toHaveBeenCalledTimes(1);
      expect(mockedInstance).toHaveBeenCalledTimes(1);
      expect(mockedInstance).toHaveBeenCalledWith({
        method: 'GET',
        url: '/price',
        params: {
          start_latitude: startLatitude,
          start_longitude: endLongitude,
          end_latitude: startLatitude1,
          end_longitude: endLongitude1,
          seat_count: 2,
        },
      });
    });
  });

  describe('#getExpectedTimeOfArrival', () => {
    it('gets ETAs', async () => {
      const etas = await client.getExpectedTimeOfArrival({ start });
      expect(etas).toEqual('foobar');
      expect(axios.create).toHaveBeenCalledTimes(1);
      expect(mockedInstance).toHaveBeenCalledTimes(1);
      expect(mockedInstance).toHaveBeenCalledWith({
        method: 'GET',
        url: '/time',
        params: {
          start_latitude: startLatitude,
          start_longitude: endLongitude,
          productId: null,
        },
      });
    });
  });
});
