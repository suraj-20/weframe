"use client";

import { useState } from "react";

const statuses = [
  { label: "All", count: 4500 },
  { label: "Draft", count: 1203 },
  { label: "Pending", count: 890 },
  { label: "Published", count: 2432 },
  { label: "Archived", count: 320 },
];

const StatusFilter = () => {
  const [activeStatus, setActiveStatus] = useState("All");

  return (
    <div
      className="flex gap-2 px-6 py-4 bg-white"
      style={{ gap: "10px", margin: "20px" }}
    >
      {statuses.map((status) => (
        <button
          key={status.label}
          onClick={() => setActiveStatus(status.label)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all`}
          style={{
            color: activeStatus === status.label ? "#fff" : "#374151",
            backgroundColor:
              activeStatus === status.label ? "#1b0a57" : "#f1f2f6",
            padding: "12px 15px",
            border: "none",
            borderRadius: "8px",
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          {status.label}{" "}
          <span
            className={`ml-1`}
            style={{
              color: activeStatus === status.label ? "#fff" : "#9ca3af",
            }}
          >
            ({status.count.toLocaleString()})
          </span>
        </button>
      ))}
    </div>
  );
};

export default StatusFilter;
