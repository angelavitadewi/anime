import { combineReducers } from 'redux';
import collectionReducer from './collectionReducer';

const appReducer = combineReducers({
  collection: collectionReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
