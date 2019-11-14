// ./src/store/layout/reducer.tsx

import { Reducer } from 'redux';
import { LayoutState, LayoutActionTypes } from './types';

// initial state
const initialState: LayoutState = {
    theme: 'light'
}

const reducer: Reducer<LayoutState> = (state = initialState, action) => {
    switch (action.type) {
        case LayoutActionTypes.SET_THEME: {
            return { ...state, theme: action.payload }
        }
        default: {
            return state
        }
    }
}


export { reducer as layoutReducer }
