import React from "react";
import { Genre } from "../entities/Genre";

interface Props {
  genre: Genre[];
}
const GenreDetails = ({ genre }: Props) => {
  return (
    <div>
      <p>Genre</p>
      {genre.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
    </div>
  );
};

export default GenreDetails;
