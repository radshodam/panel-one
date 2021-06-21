import React from "react";
import Header from "../header/Header";
import Main from "../main/Main";
import Sidebar from "../sidebar/Sidebar";
import { StyleRoot, StyleContainer } from "./Style";
import { BrowserRouter as Router } from "react-router-dom";
// import routes from "../../routes";

const Roots: React.FC = () => {
  return (
    <StyleRoot>
      <Header />
      <StyleContainer>
        <Router>
          <Sidebar />
          <Main>
            {/* <Switch>
              {routes.map(({ containerPath, name, path }) => (
                <Route key={name} exact path={path}>
                  {(props) => {
                    let Container = require(`${containerPath}`).default;
                    return <Container {...props} />;
                  }}
                </Route>
              ))}
            </Switch> */}
          </Main>
        </Router>
      </StyleContainer>
    </StyleRoot>
  );
};

export default Roots;
