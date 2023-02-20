import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

import { IconBaseProps } from "react-icons";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  icon?: React.ComponentType<IconBaseProps>;
  size?: string;
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
  const classStyles: string = `${size} py-1 pl-8 bg-transparent  border-b-2 border-theme-500 text-theme-700 placeholder:text-theme-500 placeholder:focus:text-transparent focus:outline-none focus:border-theme-700 peer`;

  return (
    <div>
      <div className="relative">
        <input
          className={classStyles}
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
        <span className="absolute left-1.5 top-1.5 text-xl text-theme-500 peer-focus:text-theme-700">{Icon && <Icon />}</span>
      </div>
      {!!error && <div className="inputError">{error.message}</div>}
    </div>
  );
};

export const Input = forwardRef(InputBase);
