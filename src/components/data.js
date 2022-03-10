//BASE DE DATOS
export const articulos = [
  {
    id: 1,
    foto: "https://http2.mlstatic.com/D_NQ_NP_651912-MLA46544969522_062021-V.webp",
    nombre: "arandela - min 1 - stock 10",
    categoria: "Arandelas",
    precio: 50,
    minimo: 1,
    stock: 10,
  },
  {
    id: 2,
    foto: "https://http2.mlstatic.com/D_NQ_NP_683957-MLA47036948526_082021-V.webp",
    nombre: "tuerca - min 5 - stock 20",
    categoria: "Tuercas",
    precio: 100,
    minimo: 5,
    stock: 20,
  },
  {
    id: 3,
    foto: "https://http2.mlstatic.com/D_NQ_NP_887152-MLA47668718790_092021-V.webp",
    nombre: "bulon - min 10 - stock 0",
    categoria: "Bulones",
    precio: 150,
    minimo: 10,
    stock: 0,
  },
  {
    id: 4,
    foto: "https://http2.mlstatic.com/D_NQ_NP_696648-MLA45927118595_052021-V.webp",
    nombre: "esparrago - min 10 - stock 10",
    categoria: "Esparragos",
    precio: 200,
    minimo: 10,
    stock: 10,
  },
  {
    id: 5,
    foto: "https://http2.mlstatic.com/D_NQ_NP_925038-MLA31036274869_062019-V.webp",
    nombre: "tornillo - min 1 - stock 3",
    categoria: "Tornillos",
    precio: 250,
    minimo: 1,
    stock: 3,
  },
  {
    id: 6,
    foto: "https://http2.mlstatic.com/D_NQ_NP_789514-MLA41294613616_032020-V.webp",
    nombre: "resorte - min 2 - stock 7",
    categoria: "Resortes",
    precio: 300,
    minimo: 2,
    stock: 7,
  },
  {
    id: 7,
    foto: "https://http2.mlstatic.com/D_NQ_NP_789514-MLA41294613616_032020-V.webp",
    nombre: "resorte - min 3 - stock 8",
    categoria: "Resortes",
    precio: 300,
    minimo: 3,
    stock: 8,
  },
  {
    id: 8,
    foto: "https://http2.mlstatic.com/D_NQ_NP_925038-MLA31036274869_062019-V.webp",
    nombre: "tornillo - min 2 - stock 4",
    categoria: "Tornillos",
    precio: 250,
    minimo: 2,
    stock: 4,
  },
];

// GETFETCH EXPORTACION DE BASE DE DATOS
export const getFetch = new Promise((resolve, reject) => {
  if (articulos.length !== 0) {
    setTimeout(() => {
      resolve(articulos);
    }, 2000);
  } else {
    reject("LA BASE DE DATOS SE ENCUENTRA VACIA");
  }
});