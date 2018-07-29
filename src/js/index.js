
let state = {
    counter: 0
};
let listeners = [];

const subscribe = (callback) => listeners.push(callback);
const dispatch = (action) => {

    const newState = reducer(state, action);
    if (newState !== state) {
        
        state = newState;
        listeners.forEach(listener => listener());
    }
};
const updateView = () => document.querySelector('#counter').innerText = state.counter;
const reducer = (state, action) => {
    switch(action) {

        case 'INC':
            return {counter: state.counter + 1}; //@TODO: Fix es6

        case 'DEC':
            return {counter: state.counter - 1};

        default:
            return state;
    }
};


document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        subscribe(updateView);
        document.querySelector('#inc').onclick = () => dispatch('INC');
        document.querySelector('#dec').onclick = () => dispatch('DEC');
    }
}