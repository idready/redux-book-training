
import $ from 'jquery';
import { store } from './store/store';
import { addRecipe } from './actions/recipe';

const updateUi = () => {

    const { recipes } = store.getState();
    const renderRecipe = (recipe) => `<li>${recipe.name}</li>`;
    const $recipeName = $('.recipe > input');
    
    $(`.recipe > ul`).html(recipes.map(renderRecipe));

    $(document).on('click', $recipeName, handleAdd);
};

const handleAdd = () => {

    const $recipeName = $('.recipe > input');

    if ($recipeName.val()) {
        store.dispatch( addRecipe($recipeName.val()) );
        $recipeName.val('');
    }
};

export const loadUi = () => {

    store.subscribe(updateUi);
    updateUi();
}; 