import { Router } from "express";
const router = Router();

import {
  getdatawarehouse
} from "../controllers/index.controller";

router.get("/getData", getdatawarehouse);

export default router;
