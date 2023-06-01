import { Request, Response } from "express";
import { clientSessionService } from "../../services/session/clientSession.service";

const clientSessionController = (req: Request, res: Response): Response => {
    const token = clientSessionService();
    return res.json({ token });
};

export { clientSessionController };
