import { Route, Routes } from 'react-router-dom';
import Home from "./webpages/Home";
import Login from './webpages/Login';
import Routinegenerator from './webpages/Routinegenerator';
import Signup from './webpages/Signup';


const App = () => {
  return <div className='App'>
  <Routes>
    <Route path = '/' element = {<Home />}>
      <Route index element = {<Home />}/>
      <Route path = 'routinegenerator' element = {<Routinegenerator />}/>
      <Route path = 'login' element = {<Login/>}/>
      <Route path = 'signup' element = {<Signup />}/>
      <Route path = '*' element = {<div>Not Found</div>}/>
    </Route>
  </Routes>
  </div>;
};

export default App;
