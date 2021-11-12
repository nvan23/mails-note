import { Router } from "express";

import {
  createUserSessionHandler,
  getUserSessionsHandler,
  deleteSessionHandler,
} from "../controller/session.controller";

import requireUser from "../middleware/requireUser";
import validateResource from "../middleware/validateResource";

import { createSessionSchema } from "../schema/session.schema";

const router = Router();

router.post(
  "/",
  validateResource(createSessionSchema),
  createUserSessionHandler
);

router.get("/", requireUser, getUserSessionsHandler);

router.delete("/", requireUser, deleteSessionHandler);

module.exports = router;
