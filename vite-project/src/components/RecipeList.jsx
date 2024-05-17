import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
// import {useContentful } from 'react-contentful';
// import {Outlet} from 'react-router-dom';
// import {}





const client = createClient({
  space: 'whowk467f5k2',
  accessToken: '8MeD8B_7dHwAm4qkguDooYp-ImERKwk6LJGC13IN0qg'
});

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: 'cookbook' })
      .then((response) => {
        console.log(response.items); // Check if data is fetched
        setRecipes(response.items);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid gap-10 mb-8 sm:grid-cols-2 lg:grid-cols-4">
      {recipes.map(recipe => (
        <div key={recipe.sys.id}>
          <div className=''>
            <h2>{recipe.fields.title}</h2>
          </div>
          <div className=''>
            {recipe.fields.recipeImage && recipe.fields.recipeImage.fields && (
              <img src={recipe.fields.recipeImage.fields.file.url} alt={recipe.fields.title} />
            )}
          </div>
          <div className=''>
            {recipe.fields.recipeDetails}
          </div>
          <div className=''>
             <p>{recipe.fields.ingredients}</p>
          </div>
        </div>
      ))}
    </div>
  );
};



export default RecipeList;



