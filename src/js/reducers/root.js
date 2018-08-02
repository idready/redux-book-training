
import { ACTION_TYPES } from '../actions/types';

export const rootReducer = (state, action) => {

    const new_state = {...state};

    switch(action.type) {
        
        case ACTION_TYPES.ADD_RECIPE:

            new_state.recipes.push({name: action.name});
        break;

        case ACTION_TYPES.ADD_INGREDIENT:

            const {recipe, name, quantity} = action;
            new_state.ingredients.push({recipe: recipe, name: name, quantity: quantity});
        break;

        default:
        break;
    }

    return new_state;
};

// export default rootReducer; @ Why doesn't this work ? 