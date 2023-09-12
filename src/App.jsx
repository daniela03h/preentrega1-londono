import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<ItemListContainer titulo="Los mejores productos" />}/>
          <Route path="/category/:cid" element={<ItemListContainer titulo="Los mejores productos" />}/>
          <Route path="/detalles/:pid" element={<ItemDetailContainer />}/>
      </Routes>
    </Router>
  );
}

export default App;
