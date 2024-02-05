import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";
import Menu from "./components/Menu";
import Produto from "./components/ProductCard";

import blusa from './assets/imgProdutos/blusa.jpg';
import camisa1 from "./assets/imgProdutos/camisa1.jpg";
import camisas from './assets/imgProdutos/camisas.jpg';
import jaqueta from './assets/imgProdutos/jaqueta.jpg';



function App() {
  return (
    <>
      <Menu />

      <div className="cards">
        <Produto
          productImage={camisa1}
          productName={"Camisa basica"}
          productDescription={"Camisa basica na cor verde musgo tamanho unico"}
          productPrice={"R$59,90"}
        />
        <Produto
          productImage={camisas}
          productName={"Kit Camisas"}
          productDescription={"Kit camisas basicas cores variadas"}
          productPrice={"R$109,90"}
        />
        <Produto
          productImage={jaqueta}
          productName={"Jaqueta envocada"}
          productDescription={"Jaqueta boa para ir pro polo norte"}
          productPrice={"R$200,00"}
        />
        <Produto
          productImage={blusa}
          productName={"Blusa "}
          productDescription={"Blusa basica na cor branca"}
          productPrice={"R$89,90"}
        />
        
      </div>
    </>
  );
}

export default App;
