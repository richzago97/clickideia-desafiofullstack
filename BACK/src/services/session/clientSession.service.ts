import jwt from "jsonwebtoken";
const clientSessionService = (): string => {
    const login = process.env.login;
    const senha = process.env.senha;
    const token = jwt.sign({ login, senha }, process.env.SECRET_KEY as string);
    return token;
};

export { clientSessionService };
