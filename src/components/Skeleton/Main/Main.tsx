import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";

interface Props {
  sidenav?: FC;
  main: FC;
}

const Layout: FC<Props> = ({ sidenav = null, main = null }) => {
  return (
    <Container className="app-header">
      <Row noGutters>
        {sidenav && <Col>{sidenav}</Col>}
        <Col>{main}</Col>
      </Row>
    </Container>
  );
};

export default Layout;
