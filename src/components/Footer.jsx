import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function FooterDom() {
  return (
    <div className="div bg-primary mt-5">
      <div className='d-flex justify-content-center'>
        <p className='px-2 py-2'>©</p>
        <p className='px-2 py-2'>Dayson Landeros</p>
        <p className='px-2 py-2'>Nicolas Vicencio</p>
      </div>
    </div>
    // <Navbar bg="primary" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="aa"></Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link >Nicolas Vicencio</Nav.Link>
    //         <Nav.Link >Dayson Landeros</Nav.Link>
    //         <Nav.Link >© 2020 Copyright:</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default FooterDom;