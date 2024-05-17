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
    <div className="recipe-list my-5">
      {recipes.map(recipe => (
        <div className="recipe-item" key={recipe.sys.id}>
          <h3 className="my-2 h-20">{recipe.fields.title}</h3>
          {/* <div class="flex items-center"><h3 className="my-2 h-20">{recipe.fields.title}</h3> </div> */}
          {recipe.fields.recipeImage && recipe.fields.recipeImage.fields && (
            <img src={recipe.fields.recipeImage.fields.file.url} alt={recipe.fields.title} className="rounded-md mb-4"/>
          )}
          <p>{recipe.fields.recipeDetails}</p>
          <div className='ingredients'>
             {/* <p>{recipe.fields.ingredients}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;



