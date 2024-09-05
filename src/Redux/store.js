import CounterReducer from './reducer';
import{createStore} from 'redux';
const store=createStore(CounterReducer);
export default store;

