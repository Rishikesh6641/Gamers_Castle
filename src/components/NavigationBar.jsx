import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export function NavigationBar() {
    return (

        <div>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" fixed='top' style={{ lineHeight: '50px' }}>
                <Container>
                    <Navbar.Brand href="#home" style={{fontWeight:'bold'}}>Gamer's <span style={{color:'red'}}>Castle</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto py-2">
                            <Nav.Link className="px-4" href="#home">Home</Nav.Link>
                            <Nav.Link className="px-4" href="#link">Our Products</Nav.Link>
                            <Nav.Link className="px-4" href="#about">About Us</Nav.Link>
                            <Nav.Link className="px-4" href="#contact">Contact Us</Nav.Link>
                            <Nav.Link className="px-4" href="#signup">Sign in/ Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}