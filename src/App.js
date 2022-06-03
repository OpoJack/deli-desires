import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Header />
      <div className='px-5 font-tiro'>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
