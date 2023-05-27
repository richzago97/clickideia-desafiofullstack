import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

const verifyIdBodyMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (req.body.id) {
        throw new AppError("Não é permitido atualizar o ID", 400);
    }

    return next();
};

export { verifyIdBodyMiddleware };
