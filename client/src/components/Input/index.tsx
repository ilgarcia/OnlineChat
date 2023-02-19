import React, { forwardRef, ForwardRefRenderFunction } from "react";
import CSS from "csstype";
import { FieldError } from "react-hook-form";
import { IconBaseProps } from "react-icons";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  icon?: React.ComponentType<IconBaseProps>;
  size?: number;
  value?: string;
  error?: FieldError;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    type,
    name,
    value,
    placeholder,
    icon: Icon,
    onChange,
    size,
    error = null,
    ...rest
  },
  ref
) => {
  const inlineStyles: CSS.Properties = {
    maxWidth: size + "px",
    width: "100%",
  };

  return (
    <>
      <div className={!!error ? "formsInput error" : "formsInput"}>
        <input
          style={inlineStyles}
          type={type}
          name={name}
          placeholder={placeholder}
          id={name}
          ref={ref}
          value={value}
          onChange={onChange}
          autoComplete="off"
          {...rest}
        />
        <span>{Icon && <Icon />}</span>
      </div>
      {!!error && <div className="inputError">{error.message}</div>}
    </>
  );
};

export const Input = forwardRef(InputBase);
