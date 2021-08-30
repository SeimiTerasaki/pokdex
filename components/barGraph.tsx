import React from "react";
import { Bar } from "react-chartjs-2";
import { capitalize } from "@/lib/pokemon.utils";
import { Stats } from "@/models/pokemon.model";

interface BarGraphProps {
  data: Stats[];
}

export default function BarGraph({ data }: BarGraphProps) {
  const statNames =
    data instanceof Array &&
    data.map((stat, index) => capitalize(stat.stat.name));
  const statData =
    data instanceof Array && data.map((stat, index) => stat.base_stat);

  const options = {
    responsive: true,
    title: {
      display: true,
      fontSize: 18,
      fontFamily: "Lato",
      color: "black",
    },
  };

  const stats = {
    labels: statNames,
    datasets: [
      {
        label: "EV Points",
        backgroundColor: "#77cfbc",
        borderColor: "rgba(179,181,198,1)",
        borderWidth: 1,
        hoverBackgroundColor: "#2d8c7",
        hoverBorderColor: "#24705f",
        data: statData,
      },
    ],
  };

  return (
    <>
      <Bar data={stats} width={400} height={300} options={options} />
    </>
  );
}
