import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { ReactComponent as Logo } from '../../logo.svg'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
        <div className="container">
            <NavbarBrand href="/">
                <Logo/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/components/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="">Products</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
        </div>
    </Navbar>
  );
}

export default Example;