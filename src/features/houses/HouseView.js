import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectedSingleHouse } from "./HouseSlice";
import './HouseView.css'

export function HouseView() {
  const selectedHouse = useSelector(selectedSingleHouse);
  const history = useHistory();
  function goBack() {
    history.goBack();
  }
  return (
    <div className="houseView">
      <div className="houseView__wrapper">
        <div className="houseView__header">
          <p>Url-{selectedHouse.url}</p>
        </div>
        <div className="houseView__body">
          <p>Name-{selectedHouse.name}</p>
          <p>Gender-{selectedHouse.region}</p>
          {/* <p>Culter-{selectedHouse.numberOfPages}</p> */}
        </div>
        <div className="houseView__footer">
          <button className="houseView__footer__btn" onClick={goBack}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
