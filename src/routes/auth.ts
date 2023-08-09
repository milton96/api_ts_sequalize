import { Router } from "express";
import authCtrl from "../controllers/auth";

const router: Router = Router();

router.get("/test", authCtrl.test);

router.post("/login", authCtrl.login);

export default router;
