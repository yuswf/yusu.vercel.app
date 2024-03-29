import store from '../stores';
import {Provider} from 'react-redux';

import '../styles/globals.css';
import '../styles/style.css';

export default function App({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}
