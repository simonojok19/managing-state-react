import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./services/useFetch";

export default function Detail() {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`products/${id}`);

  return (
    <div id="detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p id="price">${product.price}</p>
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );
}
