export default {
  getEmployees: function() {
    return fetch('http://api.alperg.com/employees')
      .then((response) => response.json())
  }
};
