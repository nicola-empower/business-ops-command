"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle } from "lucide-react"

const logs = [
    {
        id: "AUTO-8821",
        action: "Re-ordered Inventory (SKU-129)",
        trigger: "Stock < 10",
        result: "Success",
        timestamp: "10:23 AM",
    },
    {
        id: "AUTO-8822",
        action: "Sent 'Abondoned Cart' Email",
        trigger: "User Session Timeout",
        result: "Success",
        timestamp: "10:15 AM",
    },
    {
        id: "AUTO-8823",
        action: "Sync Stripe Payments to Xero",
        trigger: "Daily Schedule",
        result: "Success",
        timestamp: "09:00 AM",
    },
    {
        id: "AUTO-8824",
        action: "Generate Monthly Report",
        trigger: "EOM Trigger",
        result: "Failed",
        timestamp: "08:55 AM",
    },
]

export function AutomationLogTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Trigger</TableHead>
                    <TableHead>Result</TableHead>
                    <TableHead className="text-right">Time</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {logs.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell className="font-mono text-xs text-muted-foreground">{item.id}</TableCell>
                        <TableCell className="font-medium">{item.action}</TableCell>
                        <TableCell className="text-muted-foreground">{item.trigger}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                {item.result === "Success" ? (
                                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                                ) : (
                                    <XCircle className="h-4 w-4 text-rose-500" />
                                )}
                                <span className={item.result === "Success" ? "text-emerald-500" : "text-rose-500"}>
                                    {item.result}
                                </span>
                            </div>
                        </TableCell>
                        <TableCell className="text-right font-mono text-xs">{item.timestamp}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
