import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { setAllcharacters, setSelectedCharcter } from "./CharacterSlice";
import "./Character.css";

export function Character() {
  const dispatch = useDispatch();
  const [allcharacter, setAllCharacter] = useState([]);
  const history = useHistory();
  useEffect(() => {
    console.log("acc");
    fetch("https://www.anapioficeandfire.com/api/characters?page=1&pageSize=9")
      .then((res) => res.json())
      .then((resp) => {
        setAllCharacter(resp);
        dispatch(setAllcharacters(resp));
      });
  }, [dispatch]);

  const onCharacterView = (ele) => {
     dispatch(setSelectedCharcter(ele));
     history.push("/CharacterView");
  };
  return (
    <div className="character">
      {allcharacter.map((ele,ind) => {
        return (
          <div className="character__display" key={ind}>
            <div className="character__header">{ele.url}</div>
            <div className="character__body">
              <p>
                <span>Name-</span> {ele.name}
              </p>
              <p>
                <span>Gender-</span> {ele.gender}
              </p>
              <p>
                <span>Culter-</span>
                {ele.culture}
              </p>
            </div>
            <div className="character__footer">
              <button
                className="view__button"
                onClick={() => {
                  onCharacterView(ele);
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
