
import { store } from './store/store';
import { addIngredient } from './actions/ingredient';
import { addRecipe } from './actions/recipe'

// {
//     recipe: 'Omelette',
//     name: 'Egg',
//     quantity: 2
// }

// Tests
store.dispatch(addRecipe('Ravioli'));
store.dispatch(addIngredient('Ravioli', 'Mayonnaise', '50g'));
