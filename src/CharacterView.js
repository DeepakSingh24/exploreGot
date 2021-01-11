import React from "react";
import { useSelector } from "react-redux";
import { selectedSingleCharacter } from "./features/character/CharacterSlice";
import { useHistory } from "react-router-dom";
import "./CharacterView.css";

export function CharacterView() {
  const selectedCharcter = useSelector(selectedSingleCharacter);
  const history = useHistory();

  return (
    <div className="characterView">
      <div className="characterView__wrapper">
      <div className="characterView__header">
      <p>Url-{selectedCharcter.url}</p>
      </div>
      <div className="characterView__body">
        {/* <p>Url-{selectedCharcter.url}</p> */}
        <p>Name-{selectedCharcter.name}</p>
        <p>Gender-{selectedCharcter.gender}</p>
        <p>Culter-{selectedCharcter.culter}</p>
      </div>
      <div className="characterView__footer">
        <button
          className="characterView__footer__btn"
          onClick={() => {
            history.goBack();
          }}
        >
          Back
        </button>
      </div>
      </div>
    </div>
  );
}
