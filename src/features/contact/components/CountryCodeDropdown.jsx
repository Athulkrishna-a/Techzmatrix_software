import { useState, useRef, useEffect } from "react";

const CountryCodeDropdown = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const countryCodes = [
    { code: "+91", label: "India" },
    { code: "+1", label: "USA" },
    { code: "+44", label: "UK" },
    { code: "+971", label: "UAE" },
    { code: "+61", label: "Australia" }
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code) => {
    onChange(code);       // ✅ pass string only
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-28">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 bg-white/10 border border-white/10 rounded-lg text-white"
      >
        {value || "+91"}
        <span>▼</span>
      </button>

      {open && (
        <ul className="absolute z-50 mt-1 w-full bg-blue-500/70 rounded-lg overflow-hidden">
          {countryCodes.map((c) => (
            <li
              key={c.code}
              onClick={() => handleSelect(c.code)}
              className="px-3 py-2 cursor-pointer hover:bg-blue-400/40"
            >
              {c.label} ({c.code})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryCodeDropdown;