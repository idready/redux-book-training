
import { createStore, applyMiddleware } from 'redux';
import { logMiddleWare } from '../middleware/log';
import { rootReducer } from '../reducers/root';

export const store = createStore(
    rootReducer,
    applyMiddleware(logMiddleWare) // Connects middleware
);

// Playground
window.store = store;