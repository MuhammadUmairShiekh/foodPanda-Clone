import logo from './logo.svg';
import './App.css';
// import '../node_modules/react-bootstrap/dist/react-bootstrap';
// import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Router from './config.js/router';
import { store } from './Store'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
      <Provider store={store}  >
        <Router />
      </Provider>
    </>
  );
}

export default App;
