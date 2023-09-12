import Filter from "../Filter/Filter";
import Item from "../Item/Item";

const handleProductFilter = ({ filterState, handleFilterChange, products }) => (
  <>
    <h2>Buscador</h2>
    <input type="text" value={filterState} onChange={handleFilterChange} />
    {filterState === ""
      ? products.map((product) => <Item key={product.id} product={product} />)
      : products
          .filter((product) =>
            product.name.toLowerCase().includes(filterState.toLowerCase())
          )
          .map((product) => <Item key={product.id} product={product} />)}
  </>
);

function ItemList({ products }) {
  return (
    <Filter products={products}>
      {/* {products.map((product) => <Item key={product.id} product={product} />)} */}
      {handleProductFilter}
    </Filter>
  );
}

export default ItemList;
