import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setAllcharacters, setSelectedCharcter } from "./CharacterSlice";
import "./Character.css";

export function Character() {
  const dispatch = useDispatch();
  const [allcharacter, setAllCharacter] = useState([]);
  const [noOfPage, setNoOfPage] = useState([]);
  const [recordPerPage, setRecordPerPage] = useState(9);
  const [post, setPosts] = useState([]);
  const history = useHistory();
  const setPages = () => {
    let maxLength = Math.ceil(allcharacter.length / recordPerPage);
    let numArray = [];
    for (let i = 1; i <= maxLength; i++) {
      numArray.push(i);
    }
    return numArray;
  };
  useEffect(async () => {
     fetch(
      "https://www.anapioficeandfire.com/api/characters?page=1&pageSize=100"
    )
      // fetch('https://www.anapioficeandfire.com/api/characters')
      .then((res) => res.json())
      .then(async (resp) => {
         setAllCharacter(resp);
        dispatch(setAllcharacters(resp));
      });
  }, [dispatch]);

  useEffect(() => {
    setNoOfPage(setPages());
    if (!!allcharacter) setPosts(allcharacter.slice(0, recordPerPage ));
  }, [allcharacter]);

  const onClickPagination = (ele) => {
    let fromElement = (ele - 1) * recordPerPage;
    let toElement = fromElement + (recordPerPage);
    setPosts(allcharacter.slice(fromElement, toElement));
  };

  const Pagination = () => {
    return noOfPage.map((ele) => {
      return (
        <div
          key={ele}
          onClick={() => {
            onClickPagination(ele || 0);
          }}
          style={{ padding: "10px", border: "1px solid gray" }}
        >
          {ele}
        </div>
      );
    });
  };

  const onCharacterView = (ele) => {
    dispatch(setSelectedCharcter(ele));
    history.push("/CharacterView");
  };
  return (
    <div className="character">
      <div className="character__wrapper">
        {post.map((ele, ind) => {
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
      <div className="character__pagination">{<Pagination />}</div>
    </div>
  );
}
