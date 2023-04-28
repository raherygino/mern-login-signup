
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/main.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/home/Homepage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { useState } from 'react';


const App = () => {
  const [user,setLoginUser] = useState({
 
  })

  return(
    <>
      <Routes>
        <Route index element={ user && user._id ? <Homepage /> : <Login/>} />
        <Route path="login/" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="register/" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
