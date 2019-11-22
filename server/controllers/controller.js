const axios = require("axios");
const moment = require("moment");

module.exports = {
  getEmployees: (req, res) => {
    axios.get("http://api.alperg.com/employees")
    .then(response => {
      const today = moment();

      const newData = response.data.map(emp => {
        const dateEmpStarted = moment(emp.date, 'MM/D/YYYY');
        emp.daysPassed = `${today.diff(dateEmpStarted, 'days')} days`;
        return emp;
      })

      res.json(newData);
    });
  }
};
