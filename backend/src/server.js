import express from "express";
import cors from "cors";
import routes from "./routes/listingRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.use("/api", routes);
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
