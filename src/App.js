//CSS
import './App.css';

//applications
import { BrowserRouter, Routes, Route } from "react-router-dom"

//components
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';

//Pages
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import NewProduct from './pages/Newproduct/NewProduct';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/newproduct' element={<NewProduct />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
