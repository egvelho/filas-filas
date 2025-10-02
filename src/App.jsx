const compras = [
  "Salgadinho",
  "Toddynho",
  "Suco de maçã",
  "Pão de queijo",
  "Ajax",
  "Morfina",
];

export default function App() {
  const listaDeCompras = compras.map((compra) => <li>{compra}</li>);

  return <ul>{listaDeCompras}</ul>;
}
