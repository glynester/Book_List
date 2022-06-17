import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

// key was the piece of state or the name of the piece of state and the value was the reducer itself.
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;

// "BooksReducer" - this reducers going to add a key to our global application state called books where the key is books and the value is whatever gets returned from the books reducer which in this case is our array of books.

// Our state is going to be equal to an object with a key of books and a value of an array of books.
