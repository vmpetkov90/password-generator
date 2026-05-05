import React from 'react'

/*
  CheckboxOption
  --------------------------------------------------
  - Reusable checkbox component for:
      • Uppercase
      • Lowercase
      • Numbers
      • Symbols
  - Matches your existing markup and styling exactly.
*/

export const CheckboxOption = ({ id, label, checked, onChange }) => {
  return (
    <div className="my-3">
      <label className="flex items-center cursor-pointer" htmlFor={id}>
        <input
          className="hidden peer"
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
        />
        <span className="border-2 size-5.5 flex justify-center items-center border-white text-sm mr-5 text-transparent peer-checked:text-gray-800 peer-hover:border-green-300 peer-checked:border-green-300 peer-checked:bg-green-300">
          <i className="fa-solid fa-check"></i>
        </span>
        {label}
      </label>
    </div>
  )
}
