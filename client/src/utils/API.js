export default {
  getEmployees: function() {
    return fetch('/api/employees')
      .then((response) => response.json())
  }
};
