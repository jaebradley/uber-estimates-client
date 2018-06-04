import axios from 'axios';

class UberEstimatesClient {
  constructor({ serverToken, languageCode = 'en_US' }) {
    this.serverToken = serverToken;
    this.client = axios.create({
      baseURL: 'https://api.uber.com/v1.2/estimates',
      headers: {
        Authorization: `Token ${this.serverToken}`,
        'Accept-Language': languageCode,
      },
    });
  }

  getPrices({ start, end, seats = 2 }) {
    const {
      latitude: startLatitude,
      longitude: startLongitude,
    } = start;
    const {
      latitude: endLatitude,
      longitude: endLongitude,
    } = end;
    return this.client({
      method: 'GET',
      url: '/price',
      params: {
        start_latitude: startLatitude,
        start_longitude: startLongitude,
        end_latitude: endLatitude,
        end_longitude: endLongitude,
        seat_count: seats,
      },
    }).then(response => response.data);
  }

  getExpectedTimeOfArrival({ start, productId = null }) {
    const {
      latitude: startLatitude,
      longitude: startLongitude,
    } = start;

    return this.client({
      method: 'GET',
      url: '/time',
      params: {
        start_latitude: startLatitude,
        start_longitude: startLongitude,
        productId,
      },
    }).then(response => response.data);
  }
}

export default UberEstimatesClient;
