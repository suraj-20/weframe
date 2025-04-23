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
    <div className="m-5 flex flex-wrap gap-2 bg-white">
      {statuses.map((status) => (
        <button
          key={status.label}
          onClick={() => setActiveStatus(status.label)}
          className={`rounded-md p-2 text-xs font-medium transition-all`}
          style={{
            color: activeStatus === status.label ? "#fff" : "#374151",
            backgroundColor:
              activeStatus === status.label ? "#1b0a57" : "#f1f2f6",
          }}
        >
          {status.label}{" "}
          <span
            className={`ml-1`}
            style={{
              color: activeStatus === status.label ? "#fff" : "#A0A3BD",
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
