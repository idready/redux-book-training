
import { recipesReducer } from './recipes';
import { ingredientsReducer } from './ingredients';

export const rootReducer = (state = {}, action) => {

    const new_state = {
        ...state,
        recipes: recipesReducer(state.recipes, action),
        ingredients: ingredientsReducer(state.ingredients, action),
    };

    return new_state;
};

// export default rootReducer; @ Why doesn't this work ? 