//import "dotenv/config"
import dotenv from 'dotenv';
import express, { Application } from "express";

dotenv.config();

const PORT: number = parseInt(process.env["PORT"] || "3000", 10);

const app: Application = express();
app.set("PORT", PORT);

export default app;