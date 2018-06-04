[![Build Status](https://travis-ci.org/jaebradley/uber-client.svg?branch=master)](https://travis-ci.org/jaebradley/uber-client)
[![Coverage Status](https://coveralls.io/repos/github/jaebradley/uber-client/badge.svg?branch=master)](https://coveralls.io/github/jaebradley/uber-client?branch=master)
[![npm version](https://badge.fury.io/js/uber-client.svg)](https://badge.fury.io/js/uber-client)

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
