import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';

function Mynavbar() {
  const expand = 'md';
  return(

    
 <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container >
            <Navbar.Brand href="#">بلاگ هوش مصنوعی </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="سفشقف"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  بلاگ هوش مصنوعی
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className='nav-linl'>صفحه اصلی</NavLink>
                  <NavLink className='nav-linl'>ساخت مقاله </NavLink>
                  <NavLink className='nav-linl'>درباره ما </NavLink>  
                </Nav>
            
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  )
};

export default Mynavbar;