
import { ADD_RECIPE, SET_RECIPES } from '../constants/actionTypes';

export const recipesReducer = (recipes = [], action) => {

    switch(action.type) {

        case ADD_RECIPE: // This is still necessary, it ensures addition with the right properties
            return recipes.concat({name: action.name});

        case SET_RECIPES:
            return action.recipes;
    }
    return recipes;
};