// State argument is not application state but only the state this reducer is reponsible for.
// We must always return a non-undefined value.
export default function(state=null, action){
  switch(action.type){
    case "BOOK_SELECTED": 
    return action.payload;
  }
  return state;
}

// all reducers get 2 arguments; the current state and action.