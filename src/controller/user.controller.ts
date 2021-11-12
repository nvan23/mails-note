import { FindUserInput } from './../schema/user.schema';
import { Request, Response } from "express";
import { omit } from "lodash";
import { CreateUserInput } from "../schema/user.schema";
import {
  createUser,
  findAllUsers,
} from "../service/user.service";
import logger from "../utils/logger";

export async function createUserHandler (
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getAllUsersHandler (
  req: Request<FindUserInput["query"]>,
  res: Response
) {
  const product = await findAllUsers(req.query);

  if (!product) {
    return res.sendStatus(404);
  }

  return res.send(product);
}