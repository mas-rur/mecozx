"use client";

import { useEffect, useRef, useState } from "react";

const TARGET_GOAL = 2_200_000;
const CURRENT_RAISED = 101_000;

export default function FundingProgress() {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    let frame: number;
    const duration = 2000;

    function step(timestamp: number) {
      if (startRef.current === null) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.floor(eased * CURRENT_RAISED));
      if (progress < 1) frame = requestAnimationFrame(step);
    }
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  const percentage = Math.min((value / TARGET_GOAL) * 100, 100);

  return (
    <div className="bg-gray-50 rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] w-full max-w-md mx-auto md:mx-0 md:ml-auto text-center">
      <p className="text-sm font-semibold text-gray-500 mb-2">Total Raised</p>
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-3xl font-bold">$</span>
        <span className="text-5xl font-bold tracking-tighter">{value.toLocaleString()}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-6 overflow-hidden">
        <div
          className="bg-black h-2 rounded-full transition-[width] duration-100"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between text-xs font-semibold mt-3 text-gray-400">
        <span>$0</span>
        <span>Target: ${(TARGET_GOAL / 1_000_000).toFixed(1)}M</span>
      </div>
    </div>
  );
}
