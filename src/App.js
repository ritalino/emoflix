import React from "react";
import Menu from "./components/Menu";
import dadosIniciais from "./data/dados_iniciais.json";
import Footer from "./components/Footer";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"arruma a franja, passa o lápis de olho e só vai!"}
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel category={dadosIniciais.categorias[1]} />
      <Carousel category={dadosIniciais.categorias[2]} />
      <Carousel category={dadosIniciais.categorias[3]} />
      <Carousel category={dadosIniciais.categorias[4]} />
      <Carousel category={dadosIniciais.categorias[5]} />
      <Carousel category={dadosIniciais.categorias[6]} />
      <Footer />
    </div>
  );
}

export default App;
