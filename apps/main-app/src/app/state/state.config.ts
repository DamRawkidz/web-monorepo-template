import { ActionReducer, MetaReducer } from "@ngrx/store";

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    // console.log('state', state);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];
