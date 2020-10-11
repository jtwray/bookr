import React from "react";
import { connect } from "react-redux";

function SingleBook(props) {
  let specific_book = props.books.filter(
    (book) => book.isbn === props.match.params.isbn
  );
  const { title, isbn, publisher, description } = specific_book;
  return (
    <>
      title {title}
      published by {publisher}
      isbn {isbn}
      {description}
      <button onClick={() => {}}>
        <span aria-label="plus sign emoji" role="img">
          ➕
        </span>
        favorites
      </button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  };
};
export default connect(mapStateToProps, {})(SingleBook);
