import { SET_COLLECTION_LIST } from './actionType';

export const setCollection = (dispatch: (arg0: { type: any; payload: any }) => void, collections: any) => {
  console.log(collections);
  dispatch({ type: SET_COLLECTION_LIST, payload: collections });
};
