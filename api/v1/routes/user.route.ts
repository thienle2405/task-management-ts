import { Router } from "express";
import * as controller from "../controller/user.controller";
import * as authMiddleware from "../middlewares/auth.middleware";

const router: Router = Router();

router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/detail", authMiddleware.requireAuth, controller.detail);

const userRoutes: Router = router;
export default userRoutes;
