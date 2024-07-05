import logo from './logo.svg';
import './App.css';
import GetAllProducts from './productComponent/getAllProducts';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';
import GetCartItems from './productComponent/getCartItems';
import Register from './Auth/Register';
import Login from './Auth/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path="/getAll" element={<GetAllProducts/>}/>
      <Route path="/cart" element={<GetCartItems/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<Login/>}/>
     </Routes>
      
    </div>
  );
}

export default App;
