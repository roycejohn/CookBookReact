import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const contentfulClient = createClient({
  space: import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_APP_CONTENTFUL_ACCESS_TOKEN,
});

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    contentfulClient.getEntry(id)
      .then((response) => {
        setRecipe(response);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='recipe-page'>
      {recipe && (
        <div className='container mx-auto px-4 py-8'>
          <div className='title-recipe'>
            <h2 className="text-4xl font-bold">{recipe.fields.title}
            </h2>
          </div>
          <div className="mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div >
              <img 
                src={recipe.fields.recipeImage.fields.file.url} 
                alt={recipe.fields.title} 
                className="w-full rounded-lg h-auto mb-4"
              />
              <div className="details-col">
                <h3 className="text-xl font-semibold mb-2">Note:</h3>
                <p>{recipe.fields.note}</p>
              </div>
            </div>

            <div className='details-col'>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Details:</h3>
                {recipe.fields.recipeDetails}
              </div>
              <div className="ingre mb-4">
                <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
                {recipe.fields.ingredients1}
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
                {documentToReactComponents(recipe.fields.instruction)}
              </div>
            </div>
           
          
          </div>
        </div>
        
      )}
    </div>
  );
};

export default RecipeDetails;
