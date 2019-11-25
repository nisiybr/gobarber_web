import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux'; // para a utilizacao de store de dados
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import history from '~/services/history';

import { store, persistor } from '~/store/'; // deve vir depois da importacao do reactotron
import Routes from '~/routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      {/* Para a utilizacao de store */}
      <PersistGate persistor={persistor}>
        {/* {Vai renderizar a aplicacao somente depois de buscar as informacoes persistidas} */}
        <Router history={history}>
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
          {/** esse history fara a navegacao */}
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
