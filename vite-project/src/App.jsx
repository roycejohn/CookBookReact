
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import RecipeDetails from './components/RecipeDetails'; 
import RecipeListItems from './components/RecipeListItems';
import { useLocation } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import About from './components/About'


function App() {
  const location =useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      <Header />
      {isHomePage && <Hero />}
      <Routes>
        <Route path="/" element={<RecipeList />} /> 
        <Route path="/recipes" element={<RecipeListItems />} /> 
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
      <Footer />
    </>
     
  );
}

export default App;

