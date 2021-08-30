import React from "react";
import { Moves } from "@/models/pokemon.model";

interface MovesProps {
  moves: Moves[];
}
const MovesTab = ({ moves }: MovesProps) => {
  return (
    <ol className="grid grid-cols-4 ">
      {moves instanceof Array &&
        moves.map((move, index) => (
          <li className="capitalize" key={index}>
            {move.move.name}
          </li>
        ))}
    </ol>
  );
};
export default MovesTab;
