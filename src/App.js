import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';
import Checkout from './components/Checkout/Checkout';
import OrderConfirm from './components/OrderConfirm/OrderConfirm';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/order-confirm/:id' element={<OrderConfirm />} />

            <Route path="*" element={<h1>There is nothing here, sorry! ERROR 404</h1>} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
