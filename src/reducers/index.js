import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// key was the piece of state or the name of the piece of state and the value was the reducer itself.
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
