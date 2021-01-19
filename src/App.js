// import './App.css';
import  Router  from './Route/RouterFile';
import EnrollMentForm from './Formik_Parts/EnrollMentForm';
// import Form from './Component/formdata'
import FormikContainer from './Formik_Parts/FormikContainer';
import LoginForm from './Formik_Parts/LoginForm';
import RegistrationForm from './Formik_Parts/RegistrationForm';
import SimpleMap from './Formik_Parts/SimpleMap';
import Table from './table'
import {Provider} from 'react-redux'
import store from './Redux/Store'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
function App() {
  return (
    <div>
  <Provider store={store}>
     <Router/>
    <ToastContainer/>

  </Provider>
    </div>
   
  );
}

export default App;
