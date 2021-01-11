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
    <div className="book">
      {books.map((ele, ind) => {
        return (
          <div className="book__display" key={ind}>
            <div className="book__header">{ele.url}</div>
            <div className="book__body">
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
            <div className="book__footer">
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
