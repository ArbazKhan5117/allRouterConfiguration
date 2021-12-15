import React from 'react';
import {initialState} from './state';
export default function Reducer (state=initialState,action) {
   switch(action.type){
       case 'login':
           return {...state,value: action.payload};
        case 'logout':
            return {...state,value: action.payload};
        default:
            return state;
   }
};