
import Better from "./component/betterdis";
import FirstProduct from "./component/firstProduct";
import Footer from "./component/footer";

import GlimpseComponent from "./component/glimpseComponent";
import Nav from "./component/nav";
import ProductComponent from "./component/productComopnent";

import ShopCat from "./component/shopCat";
import Videolanding from "./component/videolanding";
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const scroll = new LocomotiveScroll();
  const target = document.querySelector('.App_wrapper');
  
  scroll.scrollTo(target);



  return (
    <div className="App_wrapper">
      <Nav/>
      <Videolanding/>
      <FirstProduct/>
      <Better/>
      <Footer/>
    </div>
  );
}

export default App;
