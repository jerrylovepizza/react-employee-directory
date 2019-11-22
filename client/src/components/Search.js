import React, { useState } from 'react';
import Counter from './Counter';
import Counter2 from './Counter2';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Input, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function EmployeeList(props) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar color="secondary" dark>
      <NavbarBrand href="/" className="mr-auto">Employee Directory</NavbarBrand>
      <div>
        <Input
          type="text"
          name="searchTerm"
          value={props.searchTerm}
          placeholder="search..."
          onChange={props.onChangeHandler}
        />
      </div>

      <div>
        <Counter />
        <Counter2 />
      </div>

      <ul style={{ listStyle: 'none', marginTop: 10 }}>
        <UncontrolledDropdown nav inNavbar color="success">
          <DropdownToggle nav caret>
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </ul>
      
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default EmployeeList;
