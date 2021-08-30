import React from "react";
import { PokemonType, TypeBadgeProps } from "@/models/type.model";
import { getTypeVariant } from "@/lib/pokemon.utils";

const TypeBadge = ({ type }: TypeBadgeProps) => {
  const variant = getTypeVariant(type);
  return (
    <span
      className={`inline-flex items-center justify-center px-3 py-2 text-md font-bold leading-none rounded capitalize ${variant}`}
    >
      {type}
    </span>
  );
};

export default TypeBadge;
