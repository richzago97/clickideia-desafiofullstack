import { ValidationError } from "yup";
import { NextFunction, Response, Request } from "express";

export const validateSchema = (schema: any) => {
    return async (request: Request, response: Response, next: NextFunction) => {
        try {
            const validatedData = await schema.validate(request.body, {
                abortEarly: false,
                stripUnknown: true,
            });

            request.validatedBody = validatedData;

            next();
        } catch (err) {
            return response.status(400).json({
                message: (err as ValidationError).errors,
            });
        }
    };
};
