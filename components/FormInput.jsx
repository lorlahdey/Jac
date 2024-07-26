import React from "react";

const FormInput = ({ label, type, name, value, onChange, inputStyle }) => {
  return (
    <div className="mb-4">
      <label className="block font-medium text-base leading-6 text-white">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-2 border-b-[1.5px] bg-transparent border-white  mt-[10px]"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full p-2 border-b-[1.5px] bg-transparent border-white mt-[10px] ${inputStyle}`}
        />
      )}
    </div>
  );
};

export default FormInput;
