import React from "react";

const InputBox = ({
  type = "text",
  placeholder = "Enter text",
  name,
  icon: Icon,
  label,
}) => {
  const inputId = `${name}-input`;

  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={inputId} className="text-white font-medium tracking-wide">
        {label}
      </label>
      <div className="flex items-center gap-3 bg-amber-500 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-white transition-all">
        {Icon && <Icon className="text-white w-5 h-5" />}
        <input
          id={inputId}
          type={type}
          name={name}
          placeholder={placeholder}
          aria-label={label}
          className="w-full bg-transparent text-white placeholder-white outline-none"
        />
      </div>
    </div>
  );
};

export default InputBox;
