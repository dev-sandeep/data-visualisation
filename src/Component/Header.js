import React, { useState } from 'react'
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
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand className="desktop-title" href="#home">Wiki Graph</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    );
}

export default Header;