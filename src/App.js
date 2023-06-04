import './App.css';
import {  Route,Routes} from "react-router-dom";
import MainBlock from './Components/MainBlock';
import Login from './Subcomponents/Login';
import ForgotPass from './Subcomponents/ForgotPass';
import Register from './Subcomponents/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path ="/" element ={<MainBlock/>}/>
        <Route exact path ="/login-page" element ={<Login/>}/>
        <Route exact path ="/for_pass-page" element ={<ForgotPass/>}/>
        <Route exact path ="/register-page" element ={<Register/>}/>
       </Routes>
     </div>
  );
}

export default App;
// register-page
// for_pass-page"