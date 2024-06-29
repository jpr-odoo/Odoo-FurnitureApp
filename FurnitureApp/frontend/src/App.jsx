import './App.css'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HeroSectionMain from "./components/HeroSectionMain"
import Categories from './components/Categories';
// import ProductListing from './components/ProductListing';
import Footer from './components/Footer';
import ResponsiveAppBar from './components/ResponsiveAppBar'
import HeaderBefore from "./components/HeaderBefore"
import FurnitureCard from "./components/FurnitureCard"
// import KnowMore from './components/KnowMore';

function App() {

  return (
    <>
      <div className="App">
        {/* <Header /> */}
        <HeaderBefore/>
        {/* <HeroSection /> */}
        <HeroSectionMain/>

        <Categories />
        <FurnitureCard/>
        {/* <KnowMore/> */}
        {/* <ProductListing /> */}
        <Footer />
    </div>
    </>
  )
}

export default App
