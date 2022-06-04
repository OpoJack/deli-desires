import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import About from "./components/about/about";
import Menu from "./components/menu/menu";
import Order from "./components/order/order";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Header />
      <div className='px-5 font-tiro text-gray-600/80 '>
        <About />
        <Menu />
        <Order />
        <Footer />
      </div>
    </div>
  );
}

export default App;
