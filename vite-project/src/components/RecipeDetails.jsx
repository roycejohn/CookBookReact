import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
  space: 'whowk467f5k2',
  accessToken: '8MeD8B_7dHwAm4qkguDooYp-ImERKwk6LJGC13IN0qg'
});
const RecipeDetails = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: 'cookbook' })
      .then((response) => {
        setRecipes(response.items);
      })
      .catch((err) => console.error(err));
  }, []);


  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.sys.id}>
          <h2>{recipe.fields.title}</h2>
          <img src={recipe.fields.recipeImage.fields.file.url} alt={recipe.fields.title} />
          <p>{recipe.fields.recipeDetails}</p>
          <div className='ingre'>
             <p>{recipe.fields.ingredients}
             {recipe.fields.instruction}</p>
             <div>{documentToReactComponents(recipe.fields.instruction)} 
             </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default RecipeDetails;