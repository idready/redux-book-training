
const initialState = {
    counter: 0
};

const reducer = (state, action) => {
    switch(action.type) {
        
        case 'INC':
        return {...state, counter: state.counter + 1};
        
        case 'DEC':
        return {...state, counter: state.counter - 1};
        
        default:
        return state;
    }
};

const store = Redux.createStore(reducer, initialState); // Provide by Redux
const updateView = () => document.querySelector('#counter').innerText = store.getState().counter;

store.subscribe(updateView); // Provide by Redux

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        updateView(); // update for the first time
        document.querySelector('#inc').onclick = () => store.dispatch({type: 'INC'}); // Replace simple string with object with property
        document.querySelector('#dec').onclick = () => store.dispatch({type: 'DEC'}); // Replace simple string with object with property
    }
}