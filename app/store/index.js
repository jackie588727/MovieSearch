import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

export default createAppStore = () =>{
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    const reducer = combineReducers(reducers);
    const store = createStoreWithMiddleware(reducer);
    return store;
}
