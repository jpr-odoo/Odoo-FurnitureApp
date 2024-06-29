import './App.css'
import HeroSectionMain from "./components/HeroSectionMain"
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from "./comp./components/Header
import FurnitureCard from "./components/FurnitureCard"
import KnowMore from './components/KnowMore';

function App() {

  return (
    <>
      <div className="App">
        <Header/>
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
