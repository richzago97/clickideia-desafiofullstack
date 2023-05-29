import React, { forwardRef } from "react";

type TextAreaProps = {
    placeholder?: string;
    value?: string
    onChange?: any
};

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ placeholder }, ref) => {
        return <textarea placeholder={placeholder} ref={ref} />;
    }
);

export default TextArea;
