import React from 'react';
import { Table } from 'reactstrap';

function EmployeeList(props) {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Department</th>
          <th>Start Date</th>
        </tr>
      </thead>
      <tbody>
        {
          props.employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td><img src={emp.avatar} alt="employee"></img></td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td>{emp.gender}</td>
              <td>{emp.department}</td>
              <td>{emp.date}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}

export default EmployeeList;
