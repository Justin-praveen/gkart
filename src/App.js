import logo from './logo.svg';
import './App.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
      </Routes>
    </BrowserRouter>
   
    
    </>
  );
}

export default App;
