import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux'; // nao exporta por default
import reactotronSaga from 'reactotron-redux-saga'; // exporta por default

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();
  console.tron = tron;
}
