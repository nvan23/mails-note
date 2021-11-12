import { Router } from "express";

import {
  createUserHandler,
  getAllUsersHandler,
} from "../controller/user.controller";

import requireUser from "../middleware/requireUser";

import validateResource from "../middleware/validateResource";

import {
  createUserSchema,
  getAllUsersSchema,
} from "../schema/user.schema";

const router = Router();

router.post("/", validateResource(createUserSchema), createUserHandler);

router.get(
  "/",
  [requireUser, validateResource(getAllUsersSchema)],
  getAllUsersHandler
);

module.exports = router;
