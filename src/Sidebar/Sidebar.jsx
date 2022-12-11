import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { FaHome, FaBook, FaUser } from 'react-icons/fa';
import './SidebarStyles.css'

const Sidebar = () => {
  return (
    <Nav className="d-none d-md-block bg-light sidebar" style={{ backgroundColor: '#e91e63' ,display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start'}}>
      <div className="sidebar-sticky">
        <Nav className="flex-column">
          <NavItem>
            <a href="#home" className="nav-link animated fadeInRight">
              <FaHome /> Home
            </a>
          </NavItem>
          <NavItem>
            <a href="#books" className="nav-link animated fadeInRight">
              <FaBook /> Books
            </a>
          </NavItem>
          <NavItem>
            <a href="#profile" className="nav-link animated fadeInRight">
              <FaUser /> Profile
            </a>
          </NavItem>
        </Nav>
      </div>
    </Nav>
  );
};

export default Sidebar;
