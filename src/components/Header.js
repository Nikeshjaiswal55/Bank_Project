import {Link, useNavigate} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../components/Header.css";
import Logo from "../components/img-vdo/Logo.png"

function Header() {
  const navigate=useNavigate()
  // const remove=(str)=>localStorage.removeItem(str);
  function logout(){
    localStorage.clear();
    navigate("/login");
  }
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} className="image-fluid" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <div className='d-lg-flex flex-lg-row justify-content-lg-center align-items-center'>
               <Nav.Link as={Link} to="/" className='text-light'>Home</Nav.Link>
               <Nav.Link as={Link} to="/about" className='text-light'>About</Nav.Link>
               <Nav.Link as={Link} to="/discover" className='text-light'>Discover</Nav.Link>
          {
              (localStorage.getItem("email"))?
                <Nav.Link><button className='btn bg-primary text-light' onClick={logout}>Logout</button></Nav.Link>
                :
                <>
               <Nav.Link as={Link} to="/login"><button className="btn nik-btn bg-primary text-light">login</button></Nav.Link>
              <Nav.Link as={Link} to="/register"><button className="btn bg-primary text-light">Register</button></Nav.Link></>
          }
         </div>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;