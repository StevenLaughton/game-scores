import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Routes from "../routes";

export default function AppNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Game Scores</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {
                            Routes.map((route, index) => {
                                return (
                                    <Nav.Link as={Link} key={index} to={route.path} href={route.path}>
                                        {route.name}
                                    </Nav.Link>
                                )
                            },)
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
