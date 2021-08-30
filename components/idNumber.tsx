import { useState, useEffect } from "react";

export interface IdProps {
  number: string;
}

export default function IdNumber({ number }: IdProps) {
  const [id, setId] = useState<string>();
  const pokeId = parseInt(number);

  useEffect(() => {
    if (pokeId < 10) {
      setId("#00" + number);
    } else if (pokeId > 99) {
      setId("#" + number);
    } else {
      setId("#0" + number);
    }
  });

  return id;
}
