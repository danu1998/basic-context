import React, { useContext } from "react";
import { DataContext } from "./Data";

const AuthUser = () => {
  const { user } = useContext(DataContext);
  return (
    <div>
      <span>{user.name}</span>
    </div>
  );
};

export default AuthUser;
