
import { createStore } from 'redux';
import { rootReducer } from '../reducers/root';

const initialState = {
    recipes: [],
    ingredients: []
};

export const store = createStore(rootReducer, initialState);

// Playground
window.store = store;