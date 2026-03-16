import express from "express";
import {
  sponsor_Create,
} from "../controller/sponsor.controller.js";

const sponsor = express.Router();

sponsor.post("/sponsor", sponsor_Create);

export default sponsor;