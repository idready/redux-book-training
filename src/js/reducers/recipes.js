
import { ACTION_TYPES } from '../actions/types';

export const recipesReducer = (recipes = [], action) => {

    switch(action.type) {

        case ACTION_TYPES.ADD_RECIPE: // This is still necessary, it ensures addition with the right properties
        return recipes.concat({name: action.name});
    }
    return recipes;
};