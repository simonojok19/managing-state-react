import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./services/useFetch";
import Spinner from "./Spinner";
import PageNotFound from "./PageNotFound";
import { ACTION_TYPE } from "./cartReducer";
import { useCart } from "./cartContext";
export default function DetailWrapper() {
  const { dispatch } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();
  const response = useFetch(`products/${id}`);
  return (
    <Detail
      id={id}
      dispatch={dispatch}
      navigate={navigate}
      response={response}
    />
  );
}

class Detail extends React.Component {
  state = {
    sku: "",
  };

  render() {
    const { id, response, navigate, dispatch } = this.props;
    const { loading, error, data: product } = response;
    const { sku } = this.state;

    if (loading) return <Spinner />;
    if (!product) return <PageNotFound />;
    if (error) throw error;

    return (
      <div id="detail">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p id="price">${product.price}</p>
        <select
          id="size"
          value={sku}
          onChange={(e) => this.setState({ sku: e.target.value })}
        >
          <option value="">What Size?</option>
          {product.skus.map((sku) => (
            <option value={sku.sku} key={sku.sku}>
              {sku.size}
            </option>
          ))}
        </select>
        <p>
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch({ type: ACTION_TYPE.ADD_TO_CART, id, sku });
              navigate("/cart");
            }}
            disabled={!sku}
          >
            Add To Cart
          </button>
        </p>
        <img src={`/images/${product.image}`} alt={product.category} />
      </div>
    );
  }
}
