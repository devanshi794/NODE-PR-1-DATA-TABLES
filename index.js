import express from "express";
import db from "./configs/database.js";
import dotenv from "dotenv";
import BookRoutes from "./routes/BookRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

db();

app.get("/", (req, res) => {
    res.send("Server is Running");
});

app.use("/books", BookRoutes);
app.use("/users", UserRoutes);

const port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log("Server start on port " + port);
    console.log("http://localhost:" + port);
});