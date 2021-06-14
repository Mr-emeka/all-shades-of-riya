import React from "react";

const ListOfGenre = ({ genres }) => {
  return (
    <div className="genre">
      {console.log(genres)}
      {genres.length >= 1 &&
        genres.map((genre, index) => {
          return <div className="genre__item">{genre}</div>;
        })}
    </div>
  );
};

export default ListOfGenre;
