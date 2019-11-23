import React from 'react';
import { Navbar, NavbarBrand, Input } from 'reactstrap';

function EmployeeList(props) {
  return (
    <Navbar color="primary" dark>
      <NavbarBrand href="/" className="mr-auto">React Employee Directory</NavbarBrand>
      <div>
        <Input
          type="text"
          name="searchTerm"
          value={props.searchTerm}
          placeholder="search..."
          onChange={props.onChangeHandler}
        />
      </div>
    </Navbar>
  );
}

export default EmployeeList;
