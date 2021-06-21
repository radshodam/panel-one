import React from "react";

import { StyleMain } from "./styles";

const Main: React.FC = ({ children }) => {
  return (
      <StyleMain>{children}</StyleMain>
  );
};

export default Main;
