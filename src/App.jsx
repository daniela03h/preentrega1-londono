import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <ItemListContainer titulo="Los mejores productos" />
      </div>
    </div>
  );
}

export default App;
