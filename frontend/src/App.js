import './App.css';
import AuthorizationForm from './components/AuthorizationForm';
import store from './slices/index';
import { Provider } from 'react-redux';

// import axios from 'axios';

function App() {
  return (
    <Provider store={store}>
      <AuthorizationForm />
    </Provider>
  );
}

export default App;
