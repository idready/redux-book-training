
import { createStore, applyMiddleware } from 'redux';
import { logMiddleWare } from '../middleware/log';
import { apiMiddleWare } from '../middleware/api';
import { rootReducer } from '../reducers/root';

export const store = createStore(
    rootReducer,
    applyMiddleware(logMiddleWare, apiMiddleWare) // Connects middleware
);

// Playground
window.store = store;