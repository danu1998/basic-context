import React from "react";
import RowProduct from "./RowProduct";

const ProductComp = () => {
  return (
    <div>
      <h3 className="my-5">Product Data</h3>
      <div className="row mt-3">
        <RowProduct />
        <RowProduct />
        <RowProduct />
        <RowProduct />
      </div>
    </div>
  );
};

export default ProductComp;
