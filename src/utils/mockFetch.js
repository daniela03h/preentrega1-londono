const products = [
  {
    id: 1,
    name: "camiseta",
    category: "camisetas", 
    stock: 3,
    price: 500,
    description: "camiseta rosada",
    imageUrl: 'https://cdn-images.farfetch-contents.com/20/86/14/03/20861403_50786574_1000.jpg'
  },
  {
    id: 2,
    name: "pantalon",
    category: "pantalones", 
    stock: 4,
    price: 800,
    description: "pantalon morado",
  },
  {
    id: 3,
    name: "gorra",
    category: "gorras", 
    stock: 5,
    price: 200,
    description: "gorra verde",
  },
  {
    id: 4,
    name: "bolso",
    category: "bolsos", 
    stock: 7,
    price: 1000,
    description: "bolso rojo",
  },
];

export const mFetch = (pid) =>
  new Promise((res, rej) => {
    // const condition = true;
      setTimeout(() => {
        res(pid ? products.find(product => product.id === pid) : products);
      }, 1000);
  });

  // export const mFetchOne = () =>
  // new Promise((res, rej) => {
  //   const condition = true;
  //   if (condition) {
  //     setTimeout(() => {
  //       res(products[0]);
  //     }, 1000);
  //   } else {
  //     rej("sin productos");
  //   }
  // });
