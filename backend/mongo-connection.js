const mongoose = require("mongoose");

(async () => {
  await mongoose.connect("mongodb://localhost/instagram", { useUnifiedTopology: true, useNewUrlParser: true });
  console.log("Database connection is successfull");
})();
