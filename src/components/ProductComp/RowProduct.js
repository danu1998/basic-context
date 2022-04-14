import React, { useContext } from "react";
import { DataContext } from "../../context/Data";

const dataProduct = {
  img1: require("../../assets/images/tas-ransel.jpg"),
};

const RowProduct = () => {
  const { value, setValue } = useContext(DataContext);

  return (
    <div className="col-md-3">
      <div className="card">
        <img src={dataProduct.img1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Tas Ransel</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p className="fw-bold">Rp 150.000</p>
          <button
            className="btn btn-primary"
            onClick={() => setValue(value + 1)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RowProduct;
