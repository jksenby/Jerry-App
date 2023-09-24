import { Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const AppHeader = () => {
  return (
    <Nav defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <Link to="/">
          <Button variant="primary">QR page</Button>
        </Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to="/video">
          <Button variant="primary">Video</Button>
        </Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to="/map">
          <Button variant="primary">Map</Button>
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default AppHeader;
