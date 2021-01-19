import {createStore,applyMiddleware} from 'redux'
import rootreducer from './Rootreducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


export let store =createStore(rootreducer, composeWithDevTools(applyMiddleware(thunk)));
//  export let store =createStore(rootreducer);

export default store;
