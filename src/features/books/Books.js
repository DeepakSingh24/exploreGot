import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Books.css";

import { setAllBooks, setSelectedBook } from "./BookSlice";

export function Books() {
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);
  const history = useHistory();
  useEffect(() => {
    console.log("Inside books");
    fetch("https://www.anapioficeandfire.com/api/books?page=1&pageSize=9")
      .then((res) => res.json())
      .then((resp) => {
        setBooks(resp);
        dispatch(setAllBooks(resp));
      });
  }, [dispatch]);
  const onBookView = (ele) => {
    dispatch(setSelectedBook(ele));
    history.push("/viewbook");
  };
  return (
    <div className="books">
      {books.map((ele, ind) => {
        return (
          <div className="books__display" key={ind}>
            <div className="books__header">{ele.url}</div>
            <div className="books__body">
              <p>
                <span>Name-</span> {ele.name}
              </p>
              <p>
                <span>Isbn-</span> {ele.isbn}
              </p>
              <p>
                <span>Publisher-</span>
                {ele.publisher}
              </p>
              <p>
                <span>Pages-</span>
                {ele.numberOfPages}
              </p>
            </div>
            <div className="books__footer">
              <button
                className="view__button"
                onClick={() => {
                  onBookView(ele);
                }}
              >
                View
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// export default Books
