"use client"

import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle2 } from "lucide-react"

const healthData = [
    {
        item: "Shipping Boxes (Size M)",
        stock: 450,
        dailyBurn: 45,
        daysLeft: 10,
        status: "healthy",
    },
    {
        item: "Packing Tape (Rolls)",
        stock: 12,
        dailyBurn: 4,
        daysLeft: 3,
        status: "critical",
    },
    {
        item: "Bubble Wrap (50m)",
        stock: 8,
        dailyBurn: 1.5,
        daysLeft: 5,
        status: "warning",
    },
    {
        item: "Invoice Paper (Reams)",
        stock: 85,
        dailyBurn: 2,
        daysLeft: 42,
        status: "healthy",
    },
    {
        item: "Label Printer Ribbon",
        stock: 2,
        dailyBurn: 0.2,
        daysLeft: 10,
        status: "healthy",
    },
]

export function InventoryHealth() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-4 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                <div className="col-span-2">Resource</div>
                <div className="text-right">Days Left</div>
                <div className="text-right">Risk Level</div>
            </div>
            {healthData.map((item) => {
                // Calculate a visual percentage for the progress bar (20 days = 100%)
                const percentage = Math.min((item.daysLeft / 20) * 100, 100)

                return (
                    <div key={item.item} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <div className="font-medium col-span-2 truncate">{item.item}</div>
                            <div className="text-right tabular-nums font-mono text-muted-foreground">
                                {item.daysLeft}d
                            </div>
                            <div className="flex items-center justify-end gap-2">
                                {item.status === 'critical' && <AlertCircle className="h-4 w-4 text-rose-500" />}
                                {item.status === 'warning' && <AlertCircle className="h-4 w-4 text-amber-500" />}
                                {item.status === 'healthy' && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                            </div>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all ${item.status === 'critical' ? 'bg-rose-500' :
                                        item.status === 'warning' ? 'bg-amber-500' : 'bg-emerald-500'
                                    }`}
                                style={{ width: `${percentage}%` }}
                            />
                        </div>
                    </div>
                )
            })}

            <div className="pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground">
                    *Burn rate calculated based on 7-day average usage.
                </p>
            </div>
        </div>
    )
}
