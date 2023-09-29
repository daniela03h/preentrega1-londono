import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import CartContainer from "./components/CartContainer/CartContainer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer titulo="Tu Tienda" />} />
          <Route path="/category/:cid" element={<ItemListContainer />} />
          <Route path="/detalles/:pid" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </CartContextProvider>
    </Router>
  );
}

export default App;
