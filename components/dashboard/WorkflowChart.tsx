"use client"

import { Area, AreaChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
    {
        name: "Mon",
        completed: 400,
        failed: 12,
    },
    {
        name: "Tue",
        completed: 530,
        failed: 8,
    },
    {
        name: "Wed",
        completed: 460,
        failed: 24,
    },
    {
        name: "Thu",
        completed: 680,
        failed: 18,
    },
    {
        name: "Fri",
        completed: 890,
        failed: 5,
    },
    {
        name: "Sat",
        completed: 230,
        failed: 2,
    },
    {
        name: "Sun",
        completed: 340,
        failed: 0,
    },
]

export function WorkflowChart() {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 10,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
                        dy={10}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'var(--card)',
                            borderColor: 'var(--border)',
                            borderRadius: '8px',
                            fontSize: '12px',
                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                        }}
                    />
                    <Area
                        type="monotone"
                        dataKey="completed"
                        stackId="1"
                        stroke="var(--primary)"
                        fill="var(--primary)"
                        fillOpacity={0.2}
                        strokeWidth={2}
                    />
                    <Area
                        type="monotone"
                        dataKey="failed"
                        stackId="1"
                        stroke="var(--destructive)"
                        fill="var(--destructive)"
                        fillOpacity={0.2}
                        strokeWidth={2}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
