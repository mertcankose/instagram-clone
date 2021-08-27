const app = require("./server");

//listen port
const port = 8000;
app.listen(port, () => {
  console.log("Server is listening on port", `${port}`);
});
