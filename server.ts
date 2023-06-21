import mongoose from "mongoose";
import { app } from "./src/app";

const { DB_HOST, PORT = 3001 } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST as string)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error: Error) => {
    console.log(error.message);
    process.exit(1);
  });
