
import axios from 'axios';
import { FETCH_RECIPES } from '../constants/actionTypes';
import { setRecipes } from '../actions/recipe';

const URL = 'https://s3.amazonaws.com/500tech-shared/db.json';

const fetchData = (url, callback) => {

    axios.get(url)
         .then(callback)
         .catch((error) => console.warn(`Error fetching recipes: ${error}`))
};

export const apiMiddleWare = ({ dispatch }) => next => action => {

    if (action.type === FETCH_RECIPES) {
        fetchData( URL, ({ data }) => dispatch(setRecipes(data.recipes)) );
    }
    next(action);
};

// export default apiMiddleWare;