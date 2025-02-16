import "dotenv/config";

import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  res.send("Hello Prisma!");
});


// route file
import routes from "./routes/index.js"
app.use(routes)



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});