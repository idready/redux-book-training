
export const logMiddleWare = ({getState, dispatch}) => (next) => (action) => {

    console.log(`Action: ${action.type}`);
    // Pass to next action (which should have been called before this)
    next(action); // Pass action to next middleware (if any)
};