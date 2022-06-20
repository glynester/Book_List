export function selectBook(book){
  console.log("Book selected", book.title);
  // selectBook is an actionCreator, it needs to return an action (an object with a type property)
  return {
    type: "BOOK_SELECTED",
    payload: book
  }
}


// Actions must always have a type defined and they can optionally have a payload or any other number of properties. But in general we tend to call this payload whenever we pass you know a piece of data along with the action. It's just convention.