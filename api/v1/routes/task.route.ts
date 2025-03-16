import express, { Router } from "express";
const router: Router = express.Router();
import * as controller from "../controller/task.controller";
import * as authMiddleware from "../middlewares/auth.middleware";

router.get("/", controller.index);
router.get("/detail/:id", controller.detail);
router.patch("/change-status/:id", controller.changeStatus);
router.patch("/change-multi", controller.changeMulti);
router.post("/create", controller.create);
router.patch("/edit/:id", controller.edit);
router.delete("/delete/:id", controller.deleteTask);

const taskRoutes: Router = router;
export default taskRoutes;
