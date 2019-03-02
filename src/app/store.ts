

import { INCREMENT } from './actions';
import { combineReducers, Reducer } from 'redux';

export class IAppState {
    counter: number;
}

export const INITIAL_STATE: IAppState = {
    counter: 0
};


export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case INCREMENT: return { counter: state.counter + 1 };
    }
    return state;
}
