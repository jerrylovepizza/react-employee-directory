import React from 'react';
import Search from './Search';
import EmployeeList from './EmployeeList';
import API from '../utils/API';

class Employee extends React.Component {

  state = {
    employees: [],
    allEmployees: [],
    searchTerm: ""
  };

  onSearchChange = (e) => {
    const searchTerm = e.target.value;

    this.setState({
      searchTerm
    });

    if(searchTerm === "") {
      this.fetchEmployees();
    } else {

      const filteredList = this.state.allEmployees.filter(emp => emp.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);

      this.setState({
        employees: filteredList
      });
    }
  }

  componentDidMount() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    API.getEmployees().then(response => {
      this.setState({
        employees: response,
        allEmployees: response
      });
    });
  }

  render() {
    return (
      <div>
        <Search 
          onChangeHandler={this.onSearchChange}
          searchTerm={this.state.searchTerm}
        />
        <EmployeeList
          employees={this.state.employees}
        />
      </div>
    )
  }
};

export default Employee;
