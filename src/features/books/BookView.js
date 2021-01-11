import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectedSingleBook } from "./BookSlice";

export function BookView() {
  const selectedBook = useSelector(selectedSingleBook);
  const history = useHistory();
  function goBack() {
    history.goBack();
  }
  return (
    // <div className="bookView">
    //  <div className="bookView__wrapper">
    //  {selectedBook.url}
    //   {selectedBook.name}
    //   {selectedBook.isbn}
    //   {selectedBook.publisher}
    //   <div className="houseView__footer">
    //     <button onClick={goBack}>Back</button>
    //   </div>
    //  </div>
    // </div>
    <div className="characterView">
    <div className="characterView__wrapper">
      <div className="characterView__header">
        <p>Url-{selectedBook.url}</p>
      </div>
      <div className="characterView__body">
        <p>Name-{selectedBook.name}</p>
        <p>Isbn-{selectedBook.isbn}</p>
        <p>Publisher-{selectedBook.publisher}</p>
        <p>pages-{selectedBook.numberOfPages}</p>
      </div>
      <div className="characterView__footer">
        <button className="characterView__footer__btn" onClick={goBack}>
          Back
        </button>
      </div>
    </div>
  </div>
  );
}
