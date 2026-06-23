import Book from "../models/book.model.js";

export const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);

    res.status(201).json({
      message: "Book Created Successfully.",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json({
      message: "Books Fetched Successfully.",
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    res.status(200).json({
      message: "Book Fetched Successfully.",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Book Updated Successfully.",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Book Deleted Successfully.",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};