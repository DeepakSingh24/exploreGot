import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectedSingleBook } from "./BookSlice";
import './BookView.css'

export function BookView() {
  const selectedBook = useSelector(selectedSingleBook);
  const history = useHistory();
  function goBack() {
    history.goBack();
  }
  return (
    <div className="bookView">
    <div className="bookView__wrapper">
      <div className="bookView__header">
        <p>Url-{selectedBook.url}</p>
      </div>
      <div className="bookView__body">
        <p>Name-{selectedBook.name}</p>
        <p>Isbn-{selectedBook.isbn}</p>
        <p>Publisher-{selectedBook.publisher}</p>
        <p>pages-{selectedBook.numberOfPages}</p>
      </div>
      <div className="bookView__footer">
        <button className="bookView__footer__btn" onClick={goBack}>
          Back
        </button>
      </div>
    </div>
  </div>
  );
}
