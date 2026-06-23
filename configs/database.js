import mongoose from "mongoose";

const database = async () => {
    try {
        await mongoose.connect(
            "mongodb://127.0.0.1:27017/bookstore"
        );

        console.log("Database connected.");
    } catch (error) {
        console.log(error.message);
    }
};

export default database;