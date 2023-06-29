import { Global } from '@emotion/react';
import { GlobalStyles } from './component/Global/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './page/Home/Home';
import { ApolloProvider } from '@apollo/client';
import { client } from './config/client';
import { Detail } from './page/Detail/Detail';
import { Navbar } from './component/Navbar/Navbar';
import { navbarConstant } from './constant/Constant';
import { Fragment, Suspense } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import storeApp from './config/storeConfig';
import { Collections } from './page/Collections/Collections';

function App() {
  return (
    <>
      <Provider store={storeApp().store}>
        <PersistGate loading={<Fragment />} persistor={storeApp().persist}>
          <Suspense fallback={<Fragment />}>
            <ApolloProvider client={client}>
              <Global styles={GlobalStyles} />
              <BrowserRouter basename='/'>
                <Navbar navbarList={navbarConstant} />
                <Routes>
                  <Route index element={<Home />} />
                  <Route path='/anime/:id' element={<Detail />} />
                  <Route path='/collections' element={<Collections />} />
                </Routes>
              </BrowserRouter>
            </ApolloProvider>
          </Suspense>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
