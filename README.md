[![Build Status](https://travis-ci.org/jaebradley/uber-client.svg?branch=master)](https://travis-ci.org/jaebradley/uber-client)
[![Coverage Status](https://coveralls.io/repos/github/jaebradley/uber-client/badge.svg?branch=master)](https://coveralls.io/github/jaebradley/uber-client?branch=master)
[![npm version](https://badge.fury.io/js/uber-client.svg)](https://badge.fury.io/js/uber-client)

# A Node Uber Client

## Introduction
A simple node client that serves as an abstraction for the Uber API.

## Installation
Install via NPM
```
npm install uber-client
```

## Usage

### Get Products
Takes a coordinate, and returns a response wrapped in a Promise.

#### Example
```javascript
import {UberClient} from 'uber-client';

let client = new UberClient('my-server-token');
return client.getProducts({
  latitude: 1,
  longitude: 2
});
```

### Get Price Estimates
Takes a price estimates search query, and returns a response wrapped in a Promise.

#### Price Estimates Search Query
* `start` (a coordinate)
* `end` (a coordinate)
* `seatCount` (optional)
  * default value is 2
  * maximum value is 2

#### Example
```javascript
import {UberClient} from 'uber-client';

let client = new UberClient('my-server-token');
let query = {
  start: {
    latitude: 1,
    longitude: 2,
  },
  end: {
    latitude: 3,
    longitude: 4,
  },
  seatCount: 1,
};
return client.getPriceEstimates(query);
```

### Get Time Estimates
Takes a time estimates search query and returns a response wrapped in a Promise.

#### Time Estimates Search Query
  * `start` (a coordinate)
  * `productId` (optional)
    * must be a `string`

#### Example
```javascript
import {UberClient} from 'uber-client';

let client = new UberClient('my-server-token');
let query = {
  start: {
    latitude: 1,
    longitude: 2,
  },
  productId: 'jaebaebae',
};
return client.getTimeEstimates(query);
```
