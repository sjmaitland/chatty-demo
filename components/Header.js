import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  Navbar,
  NavbarBrand,
  Dropdown,
  NavLink,
  NavItem,
  Button
} from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownItem from 'react-bootstrap/DropdownItem';

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <NavbarBrand href="/">Chatty</NavbarBrand>
          <Dropdown as= { NavItem }>
            <DropdownToggle as= {NavLink}>
              Menu &nbsp; <FontAwesomeIcon icon={ faBars } />
            </DropdownToggle>
            { auth().currentUser ? <DropdownMenu>
              <DropdownItem>
                <Link to="/chat">Chat</Link>
              </DropdownItem>
              <DropdownItem>
                <Button 
                  variant="primary"
                  onClick={ () => auth().signOut() }>Log out</Button>
              </DropdownItem>
            </DropdownMenu> :
            <DropdownMenu>
              <DropdownItem>
                <Link to="/login">Log in</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/signup">Sign up</Link>
              </DropdownItem>
            </DropdownMenu> }
          </Dropdown>
      </Navbar>
    </header>
  );
}

export default Header;