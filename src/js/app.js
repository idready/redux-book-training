
import { store } from './store/store';
import { addIngredient } from './actions/ingredient';
import { addRecipe } from './actions/recipe'

// UI
import { loadUi } from './ui';

// Tests
store.dispatch(addRecipe('Ravioli'));
store.dispatch(addIngredient('Ravioli', 'Mayonnaise', '50g'));
store.dispatch(addIngredient('Ravioli', 'Sel', '10g'));

loadUi();