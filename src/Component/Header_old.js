import React, { useState } from 'react'
<<<<<<< HEAD:src/Component/Header_old.js
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import UseAppContext from './../Context/UseAppContext'

const Header = () => {
    /* get the context instance */
    const { setData } = UseAppContext(); 

    /* a must declaration to set and get the data */
    const [searchVal, setSearchVal] = useState('');

    /* responsible for handling the changes */
    function handleChange(e) {
        setSearchVal(e.target.value);
        setData(e.target.value, "show");
    }

=======
// import Nav from 'react-bootstrap/Nav'
// import { Link } from 'react-router-dom';
// import UrlCall from './../ContextApi/UrlCall'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import UseBaseContext from './../ContextApi/UseBaseContext'

function Header() {
>>>>>>> initial plot:src/Pages/Header.js
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand className="desktop-title" href="#home">Wiki Graph</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
<<<<<<< HEAD:src/Component/Header_old.js
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* just to show how the text would be shown live */}
                    <Nav.Link href="#home">Home <small>{searchVal ? `[${searchVal}]` : ''}</small></Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl onChange={handleChange} type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
=======
>>>>>>> initial plot:src/Pages/Header.js
        </Navbar>
    );
}

export default Header;