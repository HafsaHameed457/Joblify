import express from "express";
import NotFound from "./middleware/NotFound.js";
import ErrorHandler from "./middleware/ErrorHandler.js";
const PORT = process.env.PORT || 8000;
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("HELLO MAI HAFSA HUN");
});
app.use(NotFound);
app.use(ErrorHandler);
app.listen(PORT, () => {
  console.log(`Sever running on port ${PORT}`);
});
