import manzana from "../assets/manzana.png";
import platano from "../assets/platano.webp";
import tomate from "../assets/tomate.png";
import lechuga from "../assets/lechuga.webp";
import zanahoria from "../assets/zanahoria.webp";
import manzanagua from "../assets/manzanagua.webp";
import limon from "../assets/limon.webp";
import cebolla from "../assets/cebolla.png";
import arbeja from "../assets/arbeja.png";
import pepinillo from "../assets/pepinillo.png";
import queso from "../assets/queso.png";
import puravidapeq from "../assets/puravidapeq.png";
import canela from "../assets/canela.png";
import cucharaplastico from "../assets/cucharaplastico.png";
import palta from "../assets/palta.png";
import puravida from "../assets/puravida.png";
import manty from "../assets/manty.png";
import mantyg from "../assets/mantyg.png";
import condensada from "../assets/condensada.png";
import condensadapeq from "../assets/condensadapeq.png";
import gloriapeq from "../assets/gloriapeq.png";
import gloriag from "../assets/gloriag.png";
import ideal from "../assets/ideal.png";
import glorialight from "../assets/glorialight.png";
import lightpeq from "../assets/lightpeq.png";
import canelaclavo from "../assets/canelaclavo.png";
import haba from "../assets/haba.png";
import camote from "../assets/camote.png";
import papa from "../assets/papa.png";
import hongoslaurel from "../assets/hongoslaurel.png";
import doñagustacarne from "../assets/doñagustacarne.png";
import doñagustagallina from "../assets/doñagustagallina.png";
import palillo from "../assets/palillo.png";
import comino from "../assets/comino.png";
import gratedgloria from "../assets/gratedgloria.png";
import yogurtgloriabig from "../assets/yogurtgloriabig.png";
import yogurtgloriasmall from "../assets/yogurtgloriasmall.png";
import krgaseosabig from "../assets/krgaseosabig.png";
import krgaseosasmall from "../assets/krgaseosasmall.png";
import aguacielo from "../assets/aguacielo.png";
import cifrut from "../assets/cifrut.png";
import sporade from "../assets/sporade.png";
import aguavida from "../assets/aguavida.png";
import rellenitas from "../assets/rellenitas.png";
import picaras from "../assets/picaras.png";
import oreo from "../assets/oreo.png";
import chinchin from "../assets/chinchin.png";

export const products = [
  //Catalogo de frutas
  {
    id: 1,
    name: "Manzana",
    category: "Frutas",
    price: 0.4,
    soles: "Cuarenta centimos",
    image: manzana,
  },
  {
    id: 2,
    name: "Plátano",
    category: "Frutas",
    price: 0.3,
    soles: "Treinta centimos",
    image: platano,
  },
  //catalogo de verduras
  {
    id: 3,
    name: "Lechuga",
    category: "Verduras",
    price: 0.8,
    soles: "Ochenta centimos",
    image: lechuga,
  },
  {
    id: 4,
    name: "Tomate",
    category: "Verduras",
    price: 0.5,
    soles: "Cincuenta centimos",
    image: tomate,
  },
  {
    id: 5,
    name: "Zanahoria",
    category: "Verduras",
    price: 0.3,
    soles: "Treinta centimos",
    image: zanahoria,
  },
  {
    id: 6,
    name: "Manzana de agua",
    category: "Verduras",
    price: 0.5,
    soles: "Cincuenta centimos",
    image: manzanagua,
  },
  {
    id: 7,
    name: "Cebolla",
    category: "Verduras",
    price: 0.4,
    soles: "Cuarenta centimos",
    image: cebolla,
  },
  {
    id: 8,
    name: "Arbeja",
    category: "Verduras",
    price: 1.2,
    soles: "un sol con 20 el Kg",
    image: arbeja,
  },
  {
    id: 9,
    name: "Pepinillo",
    category: "Verduras",
    price: 1.0,
    soles: "Un sol",
    image: pepinillo,
  },
  {
    id: 10,
    name: "Limon",
    category: "Verduras",
    price: 0.5,
    soles: "Cincuenta centimos",
    image: limon,
  },
  // Catalogo de lacteos
  {
    id: 11,
    name: "Queso",
    category: "Lácteos",
    price: 3.5,
    soles: "3 soles con 50 centimos",
    image: queso,
  },
  {
    id: 12,
    name: "Leche Pura Vida",
    category: "Lácteos",
    price: 4.5,
    soles: "Grande",
    image: puravida,
  },
  {
    id: 13,
    name: "Mantequilla Manty",
    category: "Lácteos",
    price: 3.5,
    soles: "Grande",
    image: manty,
  },
  {
    id: 14,
    name: "Leche Pura Vida",
    category: "Lácteos",
    price: 2.5,
    soles: "Pequeña",
    image: puravidapeq,
  },
  {
    id: 15,
    name: "Mantequilla Manty",
    category: "Lácteos",
    price: 1.5,
    soles: "Pequeña",
    image: mantyg,
  },
  {
    id: 16,
    name: "Leche Condensada",
    category: "Lácteos",
    price: 2.5,
    soles: "Pequeña",
    image: condensada,
  },
  {
    id: 17,
    name: "Leche Condensada",
    category: "Lácteos",
    price: 5.0,
    soles: "Grande",
    image: condensadapeq,
  },
  {
    id: 18,
    name: "Leche Gloria",
    category: "Lácteos",
    price: 2.7,
    soles: "Mediano",
    image: gloriapeq,
  },
  {
    id: 19,
    name: "Leche Gloria",
    category: "Lácteos",
    price: 5.5,
    soles: "Grande",
    image: gloriag,
  },
  {
    id: 20,
    name: "Leche Ideal",
    category: "Lácteos",
    price: 5.0,
    soles: "Grande",
    image: ideal,
  },
  {
    id: 21,
    name: "Leche Gloria Light",
    category: "Lácteos",
    price: 2.5,
    soles: "Pequeña",
    image: lightpeq,
  },
  {
    id: 22,
    name: "Leche Gloria Light",
    category: "Lácteos",
    price: 5.5,
    soles: "Grande",
    image: glorialight,
  },
  //Catalogo de condimentos
  {
    id: 23,
    name: "Canela y Clavo de olor",
    category: "Condimentos",
    price: 0.5,
    soles: "Cincuenta centimos",
    image: canelaclavo,
  },
  {
    id: 24,
    name: "Canela",
    category: "Condimentos",
    price: 0.5,
    soles: "Cincuenta centimos",
    image: canela,
  },
  {
    id: 25,
    name: "Doña gusto",
    category: "Condimentos",
    price: 0.5,
    soles: "Cincuenta centimos",
    image: "",
  },
  {
    id: 26,
    name: "Doña maggi",
    category: "Condimentos",
    price: 0.5,
    soles: "Cincuenta centimos",
    image: "",
  },
  {
    id: 27,
    name: "Haba",
    category: "Verduras",
    price: 0.5,
    soles: "Cincuenta centimos",
    image: haba,
  },
  {
    id: 28,
    name: "Palta",
    category: "Frutas",
    price: 0.5,
    soles: "Cincuenta centimos",
    image: palta,
  },
  {
    id: 29,
    name: "Camote",
    category: "Verduras",
    price: 0.5,
    soles: "Cincuenta centimos",
    image: camote,
  },
  {
    id: 30,
    name: "Papa",
    category: "Verduras",
    price: 0.5,
    soles: "Cincuenta centimos",
    image: papa,
  },
  {
    id: 31,
    name: "Hongos Laurel",
    category: "Condimentos",
    price: 0.5,
    soles: "Cincuenta centimos",
    image: hongoslaurel,
  },
  {
    id: 32,
    name: "Doña gusta de Carne",
    category: "Condimentos",
    price: 0.5,
    soles: "Cincuenta centimos",
    image: doñagustacarne,
  },
  {
    id: 33,
    name: "Doña gusta de Gallina",
    category: "Condimentos",
    price: 0.5,
    soles: "Cincuenta centimos",
    image: doñagustagallina,
  },
  {
    id: 34,
    name: "Sazón Lopeza Palillo",
    category: "Condimentos",
    price: 0.5,
    soles: "Cincuenta centimos",
    image: palillo,
  },
  {
    id: 35,
    name: "Comino Sibarita",
    category: "Condimentos",
    price: 0.5,
    soles: "Cincuenta centimos",
    image: comino,
  },
  {
    id: 36,
    name: "Yogurt Gloria",
    category: "Lácteos",
    price: 2.5,
    soles: "Pequeño",
    image: yogurtgloriasmall,
  },
  {
    id: 37,
    name: "Yogurt Gloria",
    category: "Lácteos",
    price: 5.5,
    soles: "Grande",
    image: yogurtgloriabig,
  },
  {
    id: 38,
    name: "Gaseosa KR",
    category: "Bebidas",
    price: 5.5,
    soles: "3 Lt",
    image: krgaseosabig,
  },
  {
    id: 39,
    name: "Cifrut",
    category: "Bebidas",
    price: 5.5,
    soles: "Pequeña",
    image: cifrut,
  },
  {
    id: 40,
    name: "Sporade",
    category: "Bebidas",
    price: 2.5,
    soles: "Pequeña",
    image: sporade,
  },
  {
    id: 41,
    name: "Agua Vida",
    category: "Bebidas",
    price: 1.5,
    soles: "Pequeña",
    image: aguavida,
  },
  {
    id: 42,
    name: "Agua Cielo",
    category: "Bebidas",
    price: 1.0,
    soles: "Pequeña",
    image: aguacielo,
  },
  {
    id: 43,
    name: "Gaseosa KR",
    category: "Bebidas",
    price: 1.5,
    soles: "Pequeña",
    image: krgaseosasmall,
  },
  {
    id: 44,
    name: "Rellenitas",
    category: "Golosinas",
    price: 0.7,
    soles: "Setenta Centimos",
    image: rellenitas,
  },
  {
    id: 45,
    name: "Picaras",
    category: "Golosinas",
    price: 0.8,
    soles: "Ochenta Centimos",
    image: picaras,
  },
  {
    id: 46,
    name: "Óreo",
    category: "Golosinas",
    price: 0.8,
    soles: "Ochenta Centimos",
    image: oreo,
  },
  {
    id: 47,
    name: "Chinchin",
    category: "Golosinas",
    price: 1.5,
    soles: "Ochenta Centimos",
    image: chinchin,
  },
  //Catalogo de plasticos
  {
    id: 48,
    name: "cucharas de plastico",
    category: "Plasticos",
    price: 2.5,
    soles: "2 soles con 50 centimos",
    image: cucharaplastico,
  },
  //catalogo de amigurumis
  {
    id: 49,
    name: "Couple Chiken",
    category: "Amigurumi",
    price: 50.0,
    soles: "Cincuenta soles",
    image:
      "https://images.pexels.com/photos/16178789/pexels-photo-16178789/free-photo-of-pascua-semana-santa-chicas-tias.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 50,
    name: "Penguin",
    category: "Amigurumi",
    price: 45.0,
    soles: "Cuarenta y cinco soles",
    image:
      "https://images.pexels.com/photos/10768164/pexels-photo-10768164.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 51,
    name: "Rabbit",
    category: "Amigurumi",
    price: 60.0,
    soles: "Sesenta soles",
    image:
      "https://images.pexels.com/photos/2731820/pexels-photo-2731820.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 52,
    name: "Bear",
    category: "Amigurumi",
    price: 65.0,
    soles: "Sesenta y cinco soles",
    image:
      "https://images.pexels.com/photos/12109904/pexels-photo-12109904.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 53,
    name: "Flower",
    category: "Amigurumi",
    price: 15.0,
    soles: "Quince soles",
    image:
      "https://images.pexels.com/photos/15521699/pexels-photo-15521699/free-photo-of-ventanas-ventana-decoracion-oficio.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 54,
    name: "Couple Rabbit",
    category: "Amigurumi",
    price: 55.0,
    soles: "Cincuenta y cinco soles",
    image:
      "https://images.pexels.com/photos/17758247/pexels-photo-17758247/free-photo-of-munecas-juguetes-oficio-artesania.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 55,
    name: "Giraffe",
    category: "Amigurumi",
    price: 75.0,
    soles: "Setenta y cinco soles",
    image:
      "https://images.pexels.com/photos/17579312/pexels-photo-17579312/free-photo-of-juguete-de-punto-en-forma-de-jirafa.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 56,
    name: "Cocodrile",
    category: "Amigurumi",
    price: 95.0,
    soles: "Noventa y cinco soles",
    image:
      "https://images.pexels.com/photos/16482432/pexels-photo-16482432/free-photo-of-hojas-juguete-juguetes-oficio.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 57,
    name: "Boy Tigger",
    category: "Amigurumi",
    price: 85.0,
    soles: "Ochenta y cinco soles",
    image:
      "https://images.pexels.com/photos/10759157/pexels-photo-10759157.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 58,
    name: "Couple Mouse",
    category: "Amigurumi",
    price: 65.0,
    soles: "Sesenta y cinco soles",
    image:
      "https://images.pexels.com/photos/16178787/pexels-photo-16178787/free-photo-of-pascua-semana-santa-huevos-oficio.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 59,
    name: "Elephant",
    category: "Amigurumi",
    price: 75.0,
    soles: "Setenta y cinco soles",
    image:
      "https://images.pexels.com/photos/10585199/pexels-photo-10585199.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 60,
    name: "Couple Bear",
    category: "Amigurumi",
    price: 105.0,
    soles: "Cien y cinco soles",
    image:
      "https://images.pexels.com/photos/16269449/pexels-photo-16269449/free-photo-of-mono-infancia-juguete-juguetes.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 61,
    name: "Mouse child",
    category: "Amigurumi",
    price: 95.0,
    soles: "Noventa y cinco soles",
    image:
      "https://images.pexels.com/photos/207272/pexels-photo-207272.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 62,
    name: "Girl Rabbit",
    category: "Amigurumi",
    price: 55.0,
    soles: "Cincuenta y cinco soles",
    image:
      "https://images.pexels.com/photos/16178994/pexels-photo-16178994/free-photo-of-conejito-de-crochet-hecho-a-mano-con-arbol-decorativo.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 63,
    name: "Girl",
    category: "Amigurumi",
    price: 65.0,
    soles: "Sesenta y cinco soles",
    image:
      "https://cdn.pixabay.com/photo/2024/10/09/20/38/ai-generated-9109327_1280.jpg",
  },
  {
    id: 64,
    name: "Girl Bird",
    category: "Amigurumi",
    price: 95.0,
    soles: "Noventa y cinco soles",
    image:
      "https://cdn.pixabay.com/photo/2024/01/10/12/18/ai-generated-8499461_640.jpg",
  },
  {
    id: 65,
    name: "Kraknel",
    category: "Golosinas",
    price: 2.5,
    soles: "Grande",
    image: "",
  },
  {
    id: 66,
    name: "Wiskas",
    category: "Mascotas",
    price: 1.5,
    soles: "1 KG",
    image: "",
  },
  {
    id: 67,
    name: "Detergente Patito",
    category: "Productos Limpieza",
    price: 1.5,
    soles: "1 KG",
    image: "",
  },
  {
    id: 68,
    name: "Atún Grated Gloria",
    category: "Conservas y Enlatados",
    price: 1.5,
    soles: "Un sol Cincuenta",
    image: gratedgloria,
  },
  {
    id: 69,
    name: "Papel Higenico Suave",
    category: "Higiene Personal",
    price: 1.5,
    soles: "Un sol Cincuenta",
    image: "",
  },
];
