import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { getSFBooks } from "./src/routes/sf_books.js";
import { getNONSFBooks } from "./src/routes/non_sf_books.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT;

const router = express.Router();

router.get("/SF", getSFBooks);
router.get("/NON_SF", getNONSFBooks);

app.use("/", router);

app.listen(port, async () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
