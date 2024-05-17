
import { Link } from 'react-router-dom';

const RecipeListItems = () => {

  const recipes = [
    { id: '5gLUNcQhzLo97b91gvOrWL', title: 'Chorizo & Mozzarella Gnocchi' },
    { id: '3dgfSekgQbLukrTpwGhdC5', title: 'Hunters Chicken' },
    { id: '3Cz9iWTJH3bzYnIUIGH8yg', title: 'Homemade Pizza' },
    { id: 'entry_id', title: 'Bucatini with Mushroom' },
   
  ];

  return (
    <div className='recipe-page'>
      <div className="recipe-list container mx-auto">
        <div className='title-recipe flex justify-center'>
          <h2 className="text-5xl font-bold mb-4">Recipe List</h2>
        </div>
        <div>
          <ul className="grid grid-cols-1 gap-4">
            {recipes.map(recipe => (
              <li key={recipe.id} className="p-2 m-2 bg-gray-100 rounded-md">
                <Link to={`/recipes/${recipe.id}`} className="block hover:bg-gray-100 p-2 rounded-md">
                  <h3 className="text-lg font-semibold">{recipe.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
    
  );
};

export default RecipeListItems;
