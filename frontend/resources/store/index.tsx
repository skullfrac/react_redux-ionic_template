// ./src/store/index.tsx
import { combineReducers, Dispatch, Reducer, Action, AnyAction } from 'redux';
import { connectRouter, RouterState } from 'connected-react-routers';
import { LayoutState, layoutReducer } from './layout';


// top level state object
export interface ApplicationState {
  layout: LayoutState
  router: RouterState
};


// root reducer
export const createRootReducer = (history: History) =>
  combineReducers({
    layout: layoutReducer,
    router: connectRouter(history)
});


export * from './configureStore';
