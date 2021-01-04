const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground")

  .then(() => console.log("connected sucessfully"))
  .catch((err) => console.log("could not connect ", err));
