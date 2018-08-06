
import { store } from './store/store';
import { addIngredient } from './actions/ingredient';
import { addRecipe, fetchRecipes } from './actions/recipe';

// UI
import { loadUi } from './ui';

// Tests
store.dispatch(fetchRecipes());
// store.dispatch(addIngredient('Ravioli', 'Mayonnaise', '50g'));
// store.dispatch(addIngredient('Ravioli', 'Sel', '10g'));

loadUi();
store.dispatch(fetchRecipes());