import {Container, Navbar} from "react-bootstrap";
//importuojam bootstrap componentus reactui, kuriuos naudosime
import Navigation from "../navigation/Navigation";

const Header=()=>{
    return(
        <Navbar bg="primary" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand className="Brand">Juokeliai APP</Navbar.Brand>
                <Navigation/>
            </Container>
        </Navbar>
    )

}
//Navbar viduje reikšmės nurodo, kokio stiliaus elementai,
// fixed kad visada viršuje puslapio bus
export default Header