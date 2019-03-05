import { Map } from 'immutable';
import { tassign } from 'tassign';
import { INCREMENT } from './actions';
import { combineReducers, Reducer } from 'redux';

export class IAppState {
    counter: number;
}

export const INITIAL_STATE: IAppState = {
    counter: 0
};


export function rootReducer(state: Map<string, any>, action): Map<string, any> {
    switch (action.type) {
        case INCREMENT:
            // return tassign( state, { counter: state.counter + 1 });
            return state.set('counter', state.get('counter') + 1);
    }
    return state;
}
