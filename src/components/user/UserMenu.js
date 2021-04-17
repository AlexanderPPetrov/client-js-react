import React, { useState, useEffect } from 'react';
import {
    Button,
    Modal, 
    ModalHeader,
    ModalBody, 
    Input,
    Form,
    FormGroup,
    Label,
  } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { gql, useMutation, useLazyQuery } from '@apollo/client';

const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
`;

const LOGOUT = gql`
mutation Logout {
  logout {
    _id
  }
}
`;

const GET_CURRENT_USER = gql`
query getCurrentUser {
  currentUser {
    _id
    email
  }
}
`;

const UserMenu = (props) => {

    useEffect(() => {
      getCurrentUser();
    }, []);
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const [login, { data }] = useMutation(LOGIN);
    const [logout] = useMutation(LOGOUT);
  
    const [getCurrentUser, queryData] = useLazyQuery(GET_CURRENT_USER);
  
    const onLogin = () => {
      const loginData = { 
          variables: { 
              email,
              password,
          }
      }
  
      login(loginData).then( response => {
          //TODO maybe we can use a cookie
          localStorage.setItem('token', response.data.login);
          getCurrentUser();
          setModal(false);
      });
    }
  
    const [modal, setModal] = useState(false);
  
    const toggleModal = () => setModal(!modal);
  
    const onLogout = () => {
        logout();
        localStorage.setItem('token', "");
        getCurrentUser();
    }
    const getUserMenu = () => {
      if(queryData.loading || !queryData.called) {
          return null;
      }
      if(queryData.data && queryData.data.currentUser) {
        return <div className="d-flex align-items-center">
             <FontAwesomeIcon icon={faUser}/>
             <div className="mx-2">{queryData.data.currentUser.email}</div>
             <Button size="sm" onClick={()=> {
                 onLogout();
            }}>Logout</Button>
        </div>
        
      
      }
  
      return <Button onClick={()=> {
        setModal(true)
      }} color="success" size="sm">Login</Button>
    }
  
  
    return (
        <>
            { getUserMenu() }
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
        </>
    );
  }
  
  export default UserMenu;