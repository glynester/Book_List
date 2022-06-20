import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
  render(){
    if (!this.props.book){
      return <div>Select a book to get started</div> 
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    )
  }
}

//  this object that we return is going to show up as props inside of our BookDetail.
function mapStateToProps(state){
  return {
    book: state.activeBook
  }
}


export default connect(mapStateToProps)(BookDetail);

// we need to hook up the book detail to the redux store so it gets told about changes to the active piece of state.

// Our components state is completely different from our application state (managed by Redux). There's absolutely no tie whatsoever.