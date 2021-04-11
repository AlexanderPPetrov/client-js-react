import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Modal, 
  ModalHeader,
  ModalBody, 
  Input,
  Form,
  FormGroup,
  Label,
} from 'reactstrap';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg'

import { gql, useMutation } from '@apollo/client';

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toggle = () => setIsOpen(!isOpen);

  const [login, { data }] = useMutation(LOGIN);

  const onLogin = () => {
    const loginData = { 
        variables: { 
            email,
            password,
        }
    }

    login(loginData).then( response => {
        localStorage.setItem('token', response.data.login)
    });

  }

  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  return (
    <Navbar color="light" light expand="md">
        <div className="container">
            <NavbarBrand tag={Link} to="/">
                <Logo/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink tag={Link} to="/">Movies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/products">Products</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/contact">Contact</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/example">Example</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/games">Games</NavLink>
                </NavItem>
                </Nav>
                <Button onClick={()=> {
                  setModal(true)
                }}>Login</Button>
            </Collapse>
        </div>
        <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
        <Form onSubmit={e => {
          e.preventDefault();
          onLogin()
        }}>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"/>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"/>
            </FormGroup>
            <Button type="submit">Login</Button>
        </Form>
        </ModalBody>
      </Modal>
    </Navbar>
  );
}

export default Example;