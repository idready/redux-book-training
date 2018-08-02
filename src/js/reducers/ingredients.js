
import { ACTION_TYPES } from '../actions/types';

export const ingredientsReducer = (ingredients = [], action) => {

    switch(action.type) {

        case ACTION_TYPES.ADD_INGREDIENT: // This is still necessary, it ensures addition with the right properties
        return ingredients.concat({
            recipe: action.recipe,
            name: action.name,
            quantity: action.quantity
        });
    }
    return ingredients;
};