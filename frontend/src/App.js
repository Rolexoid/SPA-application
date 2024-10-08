import './App.css';
import AuthorizationForm from './components/AuthorizationForm';
import DataTable from './components/DataTable';
import store from './slices/index';
import { Provider } from 'react-redux';

// import axios from 'axios';


function App() {

  return (
    <Provider store={store}>
      {localStorage.getItem('userId') ? <DataTable /> : <AuthorizationForm />}
    </Provider>
  );
}

export default App;
