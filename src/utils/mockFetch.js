const products = [
  {
    id: 1,
    name: "camiseta",
    category: "camisetas",
    stock: 3,
    price: 500,
    description: "camiseta rosada",
    imageUrl: "https://m.media-amazon.com/images/I/31Z60UCCEYL.jpg",
  },
  {
    id: 2,
    name: "pantalon",
    category: "pantalones",
    stock: 4,
    price: 800,
    description: "pantalon morado",
    imageUrl:
      "https://cdnx.jumpseller.com/uniformes-mayogi/image/14057524/Pantalon_liceo_bogota__azul_frente_.jpg?1642070480",
  },
  {
    id: 3,
    name: "gorra",
    category: "gorras",
    stock: 5,
    price: 200,
    description: "gorra verde",
    imageUrl: "https://poderpromocional.com/images/productos/GSP-002-V.jpg",
  },
  {
    id: 4,
    name: "bolso",
    category: "bolsos",
    stock: 7,
    price: 1000,
    description: "bolso rojo",
    imageUrl:
      "https://cloud-media.tous.com/medias/sys_master/images/h05/h6a/11957748498462/product_395901115_1-20230110160124/product-395901115-1-20230110160124.jpg_515Wx515H",
  },
];

export const mFetch = (pid) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(pid ? products.find((product) => product.id === pid) : products);
    }, 1000);
  });
