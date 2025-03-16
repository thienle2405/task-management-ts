import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log(req.headers.authorization);

  if (req.headers.authorization) {
    const token: string = req.headers.authorization.split(" ")[1];

    const user = await User.findOne({
      token: token,
      deleted: false,
    }).select("-password");

    if (!user) {
      res.json({
        code: 400,
        message: "Không có quyền truy cập!",
      });
    } else {
      req["infoUser"] = user;
      next();
    }
  } else {
    res.json({
      code: 400,
      message: "Vui lòng gửi kèm token!",
    });
  }
};
