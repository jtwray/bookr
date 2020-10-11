import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const MyShelf = ({ books }) => {
  return (
    <div>
      {books.map((book, index) => {
        return (
          <div
            style={{
              width: "50%",
              border: "10px solid pink",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
            key={`isbn--${book.isbn}_idx--${index}`}
          >
            <Link to={`/myshelf/${book.isbn}`}>
              isbn:{book.isbn}
              title:{book.title}
              <img src={book.thumbnail} alt={book.isbn} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books
  };
};
export default connect(mapStateToProps, {})(MyShelf);
