import { Router, Request, Response } from "express";
const router = Router();

const usersRouter = require('./users.route')
const sessionsRouter = require('./sessions.route')
const productsRouter = require('./products.route')

router.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

router.use("/users", usersRouter)

router.use("/sessions", sessionsRouter)

router.use("/products", productsRouter)

module.exports = router;
