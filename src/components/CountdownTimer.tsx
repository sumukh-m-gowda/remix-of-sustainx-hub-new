import { useState, useEffect } from "react";

const TARGET = new Date("2026-03-15T09:00:00+05:30").getTime();

const CountdownTimer = () => {
  const [diff, setDiff] = useState(TARGET - Date.now());

  useEffect(() => {
    const id = setInterval(() => setDiff(TARGET - Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (diff <= 0) return null;

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const units = [
    { label: "Days", value: d },
    { label: "Hours", value: h },
    { label: "Minutes", value: m },
    { label: "Seconds", value: s },
  ];

  return (
    <div className="flex gap-3 md:gap-4">
      {units.map((u) => (
        <div key={u.label} className="glass rounded-lg p-3 md:p-4 min-w-[60px] text-center glow-green-sm">
          <div className="text-2xl md:text-3xl font-heading font-bold text-secondary">
            {String(u.value).padStart(2, "0")}
          </div>
          <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mt-1">{u.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
