import { UserModel } from "../models/user.model.js";

export const postUserController = async (req, res, next) => {
  try {
    await UserModel.create(req.body);

    res.status(200).json({
      code: 200,
      answer: req.body,
    });
  } catch (error) {
    next("DB Fehler");
  }
};
