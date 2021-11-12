import { Express } from "express";
const router = require("./app.route")

function routes (app: Express) {
  app.use("/api/v1", router)
}

export default routes;
