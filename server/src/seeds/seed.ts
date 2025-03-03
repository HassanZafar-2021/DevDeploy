import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";
import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let pythonQuestions = fs.readFileSync(
  path.join(__dirname, "./pythonQuestions.json"),
  "utf8"
);
pythonQuestions = JSON.parse(pythonQuestions);

db.once("open", async () => {
  await cleanDB("Question", "questions");

  await Question.insertMany(pythonQuestions);

  console.log("Questions seeded!");
  process.exit(0);
});
