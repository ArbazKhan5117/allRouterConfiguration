import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducers/reducers.js';
export const store = createStore(Reducer, applyMiddleware(thunk));