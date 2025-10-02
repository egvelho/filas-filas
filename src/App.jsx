import { Queue } from "./queue";

const queue = new Queue();
queue.enqueue("Burro"); // primeiro
queue.enqueue("Farquad");
queue.enqueue("Fiona");
queue.enqueue("Encantado"); // último

const compras = [
  "Salgadinho",
  "Toddynho",
  "Suco de maçã",
  "Pão de queijo",
  "Ajax",
  "Morfina",
];

export default function App() {
  //const listaDeCompras = compras.map((compra) => <li>{compra}</li>);

  return <div>hello</div>;
  //return <ul>{listaDeCompras}</ul>;
}
