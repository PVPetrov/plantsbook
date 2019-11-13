import React, { FC } from "react";
import { Container } from "react-bootstrap";

import "./Layout.sass";

interface Props {
  main?: any;
  header?: any;
}

const Logo: FC = () => (
  <img width="100px" src="assets/img/plant.jpg" alt="Plant" />
);

const Layout: FC<Props> = ({ main = null, header = null }) => {
  return (
    <Container fluid className="app-container">
      <Container className="app-header">
        <Logo />
        {header}
      </Container>
      <Container className="app-main">{main}</Container>
    </Container>
  );
};

export default Layout;
