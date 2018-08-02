
import { ADD_INGREDIENTS } from '../constants/actionTypes';

export const addIngredient = (recipe, name, quantity) =>
    ({type: ADD_INGREDIENT, recipe, name, quantity});

// export default addIngredients;