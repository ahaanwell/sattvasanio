"use client";

import { useState } from "react";

const PRIMARY = "#ce3125";
const PRIMARY_LIGHT = "#fdf2f2";
const PRIMARY_DARK = "#a8261d";

const specRows = [
  { key: "type",       label: "Type"           },
  { key: "area",       label: "Land Area"      },
  { key: "units",      label: "Total Units"    },
  { key: "towers",     label: "Towers"         },
  { key: "config",     label: "Configurations" },
  { key: "size",       label: "Size Range"     },
  { key: "price",      label: "Starting Price" },
  { key: "possession", label: "Possession"     },
  { key: "rera",       label: "RERA No."       },
];

export default function AccordionItem({ p }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* ── Row button ── */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full text-left transition-colors duration-150"
        style={{ backgroundColor: isOpen ? PRIMARY_LIGHT : "white" }}
        onMouseEnter={(e) => {
          if (!isOpen) e.currentTarget.style.backgroundColor = "#fafafa";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = isOpen ? PRIMARY_LIGHT : "white";
        }}
      >
        <div
          className="grid items-center gap-4 px-5 py-5"
          style={{ gridTemplateColumns: "2.5rem 1fr 2.5rem" }}
        >
          <span className="text-sm font-bold tabular-nums" style={{ color: PRIMARY }}>
            {p.number}
          </span>

          {/* Mobile layout */}
          <div className="md:hidden">
            <div className="flex flex-wrap items-center gap-2 mb-0.5">
              <span className="text-base font-semibold text-gray-900">{p.name}</span>
              <span
                className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                style={{
                  color: isOpen ? PRIMARY : "black",
                  backgroundColor: isOpen ? "#fce8e7" : "#f3f4f6",
                }}
              >
                {p.tag}
              </span>
            </div>
            <p className="text-xs text-gray-600">{p.location}</p>
            <p className="text-xs font-semibold mt-0.5" style={{ color: PRIMARY }}>
              {p.price}
            </p>
          </div>

          {/* Desktop layout */}
          <div
            className="hidden md:grid items-center gap-4 cursor-pointer"
            style={{ gridTemplateColumns: "1fr 1fr 10rem" }}
          >
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-md font-semibold text-gray-900">{p.name}</span>
                <span
                  className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                  style={{
                    color: isOpen ? PRIMARY : "black",
                    backgroundColor: isOpen ? "#fce8e7" : "#f3f4f6",
                  }}
                >
                  {p.tag}
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-0.5">{p.type}</p>
            </div>
            <span className="text-md text-gray-500 pr-4 truncate">{p.location}</span>
            <span
              className="text-sm font-semibold"
              style={{ color: isOpen ? PRIMARY : "#374151" }}
            >
              {p.price}
            </span>
          </div>

          {/* Chevron */}
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 justify-self-end"
            style={{
              border: `1.5px solid ${isOpen ? PRIMARY : "#e5e7eb"}`,
              backgroundColor: PRIMARY,
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <svg
              className="w-3.5 h-3.5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      {/* ── Expanded panel ── */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? "1400px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-5 pb-8 pt-2 bg-white border-t border-gray-100">
          <div className="ml-10 pl-5 border-l-2" style={{ borderColor: PRIMARY }}>

            <p className="text-[12px] font-bold uppercase mb-3 mt-1" style={{ color: PRIMARY }}>
              Project Specifications
            </p>

            <div className="overflow-x-auto mb-8 rounded-md border border-gray-100">
              <table className="w-full text-sm border-collapse">
                <tbody>
                  {specRows.map((row, i) => (
                    <tr key={row.key} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-2.5 px-4 text-[11px] font-semibold uppercase tracking-widest text-gray-600 whitespace-nowrap w-44">
                        {row.label}
                      </td>
                      <td className="py-2.5 px-4 text-gray-800 font-medium">{p[row.key]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-[12px] font-bold uppercase mb-3" style={{ color: PRIMARY }}>
                  Highlights
                </p>
                <ul className="space-y-2.5">
                  {p.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 leading-snug">
                      <svg
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: PRIMARY }}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[12px] font-bold uppercase mb-3" style={{ color: PRIMARY }}>
                  Key Amenities
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.amenities.map((a) => (
                    <span
                      key={a}
                      className="text-sm px-3 py-1.5 rounded border border-gray-200 text-gray-700 bg-white transition-colors duration-150"
                      style={{ cursor: "default" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = PRIMARY;
                        e.currentTarget.style.borderColor = PRIMARY;
                        e.currentTarget.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#fff";
                        e.currentTarget.style.borderColor = "#e5e7eb";
                        e.currentTarget.style.color = "#4b5563";
                      }}
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white px-5 py-3 rounded transition-colors duration-200"
              style={{ backgroundColor: PRIMARY }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = PRIMARY_DARK; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = PRIMARY; }}
            >
              View Full Details
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}