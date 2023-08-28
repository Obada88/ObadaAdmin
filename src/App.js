import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { Routes , Route } from 'react-router-dom';
import "./style/dark.css"
import { useContext } from 'react';
import {DarkModeContext} from "./context/DarkModeContext"
function App() {
  
  const {darkMode} = useContext(DarkModeContext)
  return (
    <>
    <div className={ darkMode ? " dark" :"app"}>
    <Routes>

<Route  path='/'>
<Route index element={<Home />}/>
<Route path='login' element={ <Login />}/>
<Route path='users'>
 <Route index element={<List/>}/>
 <Route path=':uesrId' element={<Single/>}/>
 <Route path='new' element={<New 
  title="Add New Usres"/>}/>
</Route>

<Route path='products'>
 <Route index element={<List/>}/>
 <Route path=':productId' element={<Single/>}/>
 <Route path='new' element={<New 
 title="Add New Product" />}/>
</Route>
</Route>
</Routes>
    </div>
   
    </>
  );
}

export default App;
