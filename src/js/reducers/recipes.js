
import { ADD_RECIPE } from '../constants/actionTypes';

export const recipesReducer = (recipes = [], action) => {

    switch(action.type) {

        case ADD_RECIPE: // This is still necessary, it ensures addition with the right properties
        return recipes.concat({name: action.name});
    }
    return recipes;
};