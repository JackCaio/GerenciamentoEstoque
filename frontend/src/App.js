import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './components/Login';
import store from './redux/store';

function App() {
  return (
    <Provider store={ store }>
      <Switch>
        <Route exact path='/' component={ Login } />
      </Switch>
    </Provider>
  );
}

export default App;
