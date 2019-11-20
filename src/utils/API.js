export default {
  getEmployees: function() {
    return fetch('http://api.alperg.com/employee')
      .then((response) => response.json())
  }
};
