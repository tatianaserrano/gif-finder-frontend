import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      {loading && "Cargando"}
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((item) => (
          <GifGridItem {...item} key={item.id} />
        ))}
      </div>
    </>
  );
};
