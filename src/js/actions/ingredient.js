
import { ACTION_TYPES } from './types';

export const addIngredient = (recipe, name, quantity) =>
    ({type: ACTION_TYPES.ADD_INGREDIENT, recipe, name, quantity});

// export default addIngredients;