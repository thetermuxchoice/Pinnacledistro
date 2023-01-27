
import './App.css';
import { SliderData } from './data/SliderData';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyle';
import MySlider from './components/MySlider'
import Dropdown from './components/Dropdown';
import Features from './components/features'
import Products from './components/Products'
import Header from './components/Header';
import Slide from "./components/Slide";

function App() {
  return (
    <>
    <GlobalStyle/>
    <Navbar/>
    <Dropdown/>
   <Slide/>
   
   <Products/>
   <Features/>
    </>
    
  );
}

export default App;
