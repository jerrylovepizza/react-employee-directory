const express = require('express');
const path = require("path");
const app = express();
const router = require("./routes/route");
app.use(express.json());

const PORT = 5555;

if(process.env.NODE_ENV === "production") {
  app.use("/static", express.static(path.join(__dirname, "../../client/build/static")));
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/"));
  })
}

app.use(router);

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
