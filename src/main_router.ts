import { join } from "path";
import express, { Router } from "express";
import { get_version } from "akeyless-server-commons/helpers";
import { MainRouter } from "akeyless-server-commons/types";

const root_router: Router = express.Router();

root_router.get("/", (req, res) => res.status(200).send("OK from data-sync"));

root_router.get("/api/data-sync/", (req, res) => {
    res.send(process.env.mode === "qa" ? "hello from data-sync QA" : "hello from data-sync PROD");
});
root_router.get("/api/data-sync/v", (req, res) => {
    res.send(`${get_version(join(__dirname, "../package.json"))} --${process.env.mode === "qa" ? "QA" : "PROD"}`);
});

const main_router: MainRouter = (app) => {
    app.use(root_router);
};

export default main_router;
