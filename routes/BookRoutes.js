import { Router } from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} from "../controllers/BookController.js";
import { bookValidator } from "../middlewares/authMiddleware.js";
const BookRoutes = Router();

BookRoutes.post("/", createBook);
BookRoutes.get("/", getAllBooks);
BookRoutes.get("/:id", getBookById);
BookRoutes.put("/:id", updateBook);
BookRoutes.delete("/:id", deleteBook);

export default BookRoutes;