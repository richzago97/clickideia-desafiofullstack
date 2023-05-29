import React from "react";
import { InputContainer, Label, TextInput } from "./style";
interface InputProps {
    label?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

function Input({ label, value, onChange, placeholder }: InputProps) {
    return (
        <InputContainer>
            <Label>{label}</Label>
            <TextInput
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </InputContainer>
    );
}

export default Input;
