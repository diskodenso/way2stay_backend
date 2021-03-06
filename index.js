import "dotenv/config";
import "./src/db/mongooseClient.js";
import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import usersRouter from "./src/routes/usersRouter.js";
import extrasRouter from "./src/routes/extrasRouter.js";
import commentsRouter from "./src/routes/commentsRouter.js";
import bookingRouter from "./src/routes/bookingsRouter.js";
import flatsRouter from "./src/routes/flatsRouter.js";
import timeSheetsRouter from "./src/routes/timeSheetsRouter.js";
import categoriesRouter from "./src/routes/categoriesRouter.js";
import reviewsRouter from "./src/routes/reviewsRouter.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

const port = process.env.PORT || 3001;

const corsOptions = {
  origin: process.env.REACT_APP_URI, // nur Zugriff von dieser Domain erlauben
  exposedHeaders: "authorization", //dem Frontend Zugriff auf die Header-Property "Authorization" geben
};
//app.use(express());
app.use(cors(corsOptions));

// import ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));
app.use(express.json());

// app.use('/api/')
app.use("/api/users", usersRouter);
app.use("/api/extras", extrasRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/bookings", bookingRouter);
app.use("/api/flats", flatsRouter);
app.use("/api/timesheets", timeSheetsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/reviews", reviewsRouter);

// Api Description
app.get("/", (req, res) => res.render("pages/index"));

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
