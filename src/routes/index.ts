import { Router } from "express";
const router = Router();

import {
  getdatawarehouse
} from "../controllers/index.controller";

router.get("/", getdatawarehouse);

export default router;
