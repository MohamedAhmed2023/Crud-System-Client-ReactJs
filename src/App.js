import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Component/NavBar/NavBar';
import SideBar from './Component/SideBar/SideBar';
import AddProducts from './Pages/AddProducts';
import Home from './Pages/Home';
import ProductsDetails from './Pages/ProductsDetails';
import Products from './Pages/Products';
import UpdateProducts from './Pages/UpdateProducts';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='parent'>
        <div className='left-child'>
          <SideBar />
        </div>
        <div className='right-child'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/add' element={<AddProducts />} />
            <Route path='/products/:id' element={<ProductsDetails />} />
            <Route path='/products/update/:id' element={<UpdateProducts />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
