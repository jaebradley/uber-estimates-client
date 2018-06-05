[![Build Status](https://travis-ci.org/jaebradley/uber-estimates-client.svg?branch=master)](https://travis-ci.org/jaebradley/uber-estimates-client)
[![codecov](https://codecov.io/gh/jaebradley/uber-estimates-client/branch/master/graph/badge.svg)](https://codecov.io/gh/jaebradley/uber-estimates-client)
[![npm version](https://badge.fury.io/js/uber-estimates-client.svg)](https://badge.fury.io/js/uber-estimates-client)

# A Node Uber Estimates Client

## Introduction

A simple node client that serves as an abstraction for the Uber Estimates API.

## Installation

Install via NPM

```bash
npm install uber-estimates-client
```

## Usage

### Get Price Estimates

Takes a price estimates search query, and returns a response wrapped in a Promise.

#### Price Estimates Parameters

* `start` (a coordinate)
* `end` (a coordinate)
* `seats` (optional)
  * default value is 2
  * maximum value is 2

#### Price Estimates Example

```javascript
import UberEstimatesClient from 'uber-estimates-client';

const client = new UberEstimatesClient('my-server-token');
let parameters = {
  start: {
    latitude: 1,
    longitude: 2,
  },
  end: {
    latitude: 3,
    longitude: 4,
  },
  seats: 1,
};
return client.getPriceEstimates(parameters);
```

### Get Expected Time of Arrival

Gets the ETA for a given location and optional product

#### ETA parameters

  * `start` (a coordinate)
  * `productId` (optional)
    * must be a `string`

#### ETA Example

```javascript
import UberEstimatesClient from 'uber-estimates-client';

const client = new UberEstimatesClient('my-server-token');
let query = {
  start: {
    latitude: 1,
    longitude: 2,
  },
  productId: 'jaebaebae',
};
return client.getExpectedTimeOfArrival(query);
```
