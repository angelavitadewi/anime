import { SET_COLLECTION_LIST } from '../Action/actionType';

const initial_state = {
  collectionList: [],
};

const collectionReducer = (state = initial_state, { type, payload }: any) => {
  switch (type) {
    case SET_COLLECTION_LIST:
      return { ...state, collectionList: payload };

    default:
      return state;
  }
};

export default collectionReducer;
