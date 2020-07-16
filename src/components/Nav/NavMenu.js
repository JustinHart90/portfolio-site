import React from 'react';
import { Container, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';

import './NavMenu.css';

const NavMenu = () => {
  let location = useLocation()
  ,   path = location.pathname;

  console.log(path);

  function getClass(checkPath) {
    return (checkPath === path ? 'text-dark' : 'text-light');
  }

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
        <Container>
          <NavbarBrand></NavbarBrand>
            <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className={getClass('/')} to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className={getClass('/projects')} to="/projects">Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className={getClass('/experience')} to="/experience">Experience</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className={getClass('/education')} to="/education">Education</NavLink>
                </NavItem>
            </ul>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavMenu;
