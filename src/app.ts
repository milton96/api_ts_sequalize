import env from "./environmet";
import express, { Application } from "express";

import routesAuth from "./routes/auth";

const PORT: number = env["server"]["PORT"];

const app: Application = express();

// config
app.set("PORT", PORT);

// routes
app.use("/api/auth", routesAuth);

export default app;