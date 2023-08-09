import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/test",async (req: Request, res: Response) => {
    return res.send("<h1>Hola mundo</h1>");
});

export default router;