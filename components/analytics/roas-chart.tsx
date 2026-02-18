"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type DataPoint = { month: string; roas: number; cpl: number; revenue: number };

export function RoasChart({ data }: { data: DataPoint[] }) {
  return (
    <div className="panel h-72">
      <h3 className="mb-3 text-sm font-medium text-zinc-200">ROAS vs CPL Trend</h3>
      <ResponsiveContainer width="100%" height="88%">
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#a1a1aa" />
          <YAxis stroke="#a1a1aa" />
          <Tooltip />
          <Line type="monotone" dataKey="roas" stroke="#D4AF37" strokeWidth={2} />
          <Line type="monotone" dataKey="cpl" stroke="#52525b" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
