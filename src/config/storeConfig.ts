import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { RESOURCE } from '../constant/Constant';
import rootReducer from './redux/Reducer/rootReducer';

const persistConfig = { key: RESOURCE, storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);

const storeApp = () => {
  const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
  const persist = persistStore(store);

  return { store, persist };
};

export default storeApp;
