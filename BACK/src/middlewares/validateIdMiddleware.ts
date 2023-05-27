import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import { validate as uuidValidate } from "uuid";

const validateIdMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const id = req.params.id;

    if (!uuidValidate(id)) {
        throw new AppError("ID inválido", 400);
    }

    next();
};

export { validateIdMiddleware };
