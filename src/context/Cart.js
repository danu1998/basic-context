import React, { useContext } from "react";
import { DataContext } from "./Data";

const Cart = () => {
  const { value, setValue } = useContext(DataContext);
  return (
    <div>
      <span>{value}</span>
    </div>
  );
};

export default Cart;
