import jwt, { VerifyErrors } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

const isValidTokenMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let token = req.headers.authorization;

    if (!token) {
        throw new AppError("Missing Bearer Token", 401);
    }
    token = token.split(" ")[1];

    jwt.verify(
        token as string,
        process.env.SECRET_KEY as string,
        (err: unknown) => {
            if (err) {
                throw new AppError("Invalid Token", 401);
            }
        }
    );
    return next();
};

export { isValidTokenMiddleware };
