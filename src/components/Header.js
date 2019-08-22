import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: rebeccapurple;
  .navbar-menu {
    @media only screen and (max-width: 600px) {
      background-color: rebeccapurple;
      text-align: center;
      margin-right: 0px;
    }
  }
  a {
    :hover {
      background-color: rebeccapurple;
      color: red;
    }
  }
  .navbar-item {
    margin-right: 4%;
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  mobileMenu() {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;
    return (
      <Navbar className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item is-size-3	has-text-white">
              GatsbyJs
            </Link>

            <a
              role="button"
              className={
                isActive
                  ? 'navbar-burger burger is-active'
                  : 'navbar-burger burger'
              }
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={() => this.mobileMenu()}>
              <span className="has-text-white" aria-hidden="true"></span>
              <span className="has-text-white" aria-hidden="true"></span>
              <span className="has-text-white" aria-hidden="true"></span>
            </a>
          </div>
          <div
            id="navbarBasicExample"
            className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-end">
              <Link to="/" className="navbar-item has-text-white">
                Home
              </Link>
              <Link to="/about" className="navbar-item has-text-white">
                About
              </Link>
              <Link to="/contact" className="navbar-item	has-text-white">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </Navbar>
    );
  }
}
