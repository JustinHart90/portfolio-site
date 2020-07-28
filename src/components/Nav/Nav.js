import React from 'react';
import { Container, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';

import './Nav.scss';

const NavMenu = (props) => {
  let location = useLocation()
  ,   path = location.pathname;

  console.log(path);

  function getClass(checkPath) {
    return (checkPath === path ? 'text-light' : 'text-dark');
  }

  function updateHistory(path) {
    // console.log(`PATH TO EVENTUALLY UPDATE: ${path}`);
    // this.props.history.push({
    //   pathname: path
    // });
  }

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
        <Container>
          <NavbarBrand></NavbarBrand>
            <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className={getClass('/')} to="/" onClick={updateHistory('/')}>Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className={getClass('/experience')} to="/experience" onClick={updateHistory('/experience')}>Experience</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className={getClass('/projects')} to="/projects" onClick={updateHistory('/projects')}>Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className={getClass('/education')} to="/education" onClick={updateHistory('/education')}>Education</NavLink>
                </NavItem>
            </ul>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavMenu;
