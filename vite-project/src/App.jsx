
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {ContentfulClient, ContentfulProvider} from 'react-contentful';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';



function App() {
  const contentfulClient = new ContentfulClient ({
    accessToken: import.meta.env.VITE_APP_CONTENTFUL_ACCESS_TOKEN,
    space: import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID,
    })

    const [contentful, setContentful] = useState([]);

  return (
    <ContentfulProvider client={contentfulClient}> 
    <h3>Hello testing</h3>
      <Header/>
        <Routes>
           <Route path='/recipes' element={<RecipeList />} />
          <Route path='/recipes/:id' element={<RecipeDetails />} />

          <Route path='/'
          element={<RecipeList contentful={contentful} setContentful={setContentful} 
          />}
          >
          </Route>
        </Routes>
      <Footer />
      </ContentfulProvider>
    
  );
}


export default App

