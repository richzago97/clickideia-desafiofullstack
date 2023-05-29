import { IProvider } from "../Interfaces/Global";
import { CardsProvider } from "./cardContext";

const Provider = ({ children }: IProvider) => (
    <CardsProvider>{children}</CardsProvider>
);

export default Provider;
