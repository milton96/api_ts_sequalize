import env from "./environmet";
import express, { Application } from "express";


const PORT: number = env["server"]["PORT"];

const app: Application = express();
app.set("PORT", PORT);

export default app;