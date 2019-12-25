import React, { useState } from 'react'
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

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
        </Navbar>
    );
}

export default Header;