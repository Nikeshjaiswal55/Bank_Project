import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

function Logout() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">DuLu BaNk</Navbar.Brand>
            <Nav className="d-flex flex-row justify-content-center align-items-center">
              <Nav.Link as={Link} to="/" className='text-light'>Home</Nav.Link>
              <Nav.Link as={Link} to="/login"><button className="btn bg-primary text-light">login</button></Nav.Link>
              <Nav.Link as={Link} to="/register"><button className="btn bg-primary text-light">Register</button></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
export default Logout;