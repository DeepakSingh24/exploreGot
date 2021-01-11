import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./House.css";
import { setAllHouse, setSelectedHouse } from "./HouseSlice";

export function House() {
  const dispatch = useDispatch();
  const [house, setHouse] = useState([]);
  const history = useHistory();
  useEffect(() => {
    console.log("Inside House");
    fetch("https://www.anapioficeandfire.com/api/houses?page=1&pageSize=9")
      .then((res) => res.json())
      .then((resp) => {
        setHouse(resp);
        dispatch(setAllHouse(resp));
      });
  }, [dispatch]);

  return (
    <div className="character">
      {house.map((ele, ind) => {
        return (
          <div className="character__display" key={ind}>
            <div className="character__header">{ele.url}</div>
            <div className="character__body">
              <p>
                <span>Name-</span> {ele.name}
              </p>
              <p>
                <span>Region-</span> {ele.region}
              </p>
            </div>
            <div className="character__footer">
              <button
                className="view__button"
                onClick={() => {
                  dispatch(setSelectedHouse(ele));
                  history.push("/viewHouse");
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
