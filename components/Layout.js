import Head from "next/head";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";


const Layout = ({children}) => (
    <Container>
        <Head>
            <title>My-First-App</title>
        </Head>

        <header>
            <Navbar bg='dark' variant= 'dark'>
                <Navbar.Brand>My First App</Navbar.Brand>
                <Nav>
                    <Nav.Link>Posts</Nav.Link>
                    <Nav.Link>Abouts</Nav.Link>
                    <Nav.Link>Todo-List</Nav.Link>
                    
                </Nav>
            </Navbar>
        </header>
        <main>{children}</main>
    </Container>
)

export default Layout