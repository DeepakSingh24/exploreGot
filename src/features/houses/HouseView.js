import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectedSingleHouse } from "./HouseSlice";

export function HouseView() {
  const selectedHouse = useSelector(selectedSingleHouse);
  const history = useHistory();
  function goBack() {
    history.goBack();
  }
  return (
    <div className="characterView">
      <div className="characterView__wrapper">
        <div className="characterView__header">
          <p>Url-{selectedHouse.url}</p>
        </div>
        <div className="characterView__body">
          <p>Name-{selectedHouse.name}</p>
          <p>Gender-{selectedHouse.region}</p>
          {/* <p>Culter-{selectedHouse.numberOfPages}</p> */}
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
