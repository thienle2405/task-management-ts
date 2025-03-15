import { Router } from "express";
import * as controller from "../controller/user.controller";

const router: Router = Router();

router.post("/register", controller.register);

const userRoutes: Router = router;
export default userRoutes;
