import React, {Component} from 'react';
const Realm = require('realm');

const MovieSchema = {
  name: 'Movies',
  primaryKey: 'id',
  properties: {
    id: 'int',
    title: 'string',
    poster: 'string',
  },
};

export default MovieSchema;
