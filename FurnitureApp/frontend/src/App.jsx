import './App.css'
import HeroSectionMain from "./components/HeroSectionMain"
import Categories from './components/Categories';
import Footer from './components/Footer';
import HeaderBefore from "./components/HeaderBefore"
import FurnitureCard from "./components/FurnitureCard"
import KnowMore from './components/KnowMore';

function App() {

  return (
    <>
      <div className="App">
        <HeaderBefore/>
        <HeroSectionMain/>

        <Categories />
        <FurnitureCard/>  
        <KnowMore/>
        <Footer />
    </div>
    </>
  )
}

export default App
