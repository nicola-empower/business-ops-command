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
import { Button } from "@/components/ui/button"
import { AlertCircle, Clock, ArrowRight } from "lucide-react"

const bottlenecks = [
    {
        id: "INV-2024-001",
        task: "Invoice Approval > $10k",
        owner: "Finance Team",
        status: "Pending",
        duration: "48h 12m",
        severity: "high",
    },
    {
        id: "SUP-9921",
        task: "Vendor Onboarding Review",
        owner: "Legal",
        status: "Stuck",
        duration: "72h 05m",
        severity: "critical",
    },
    {
        id: "ORD-1102",
        task: "Manual fraud check",
        owner: "Ops Team",
        status: "Pending",
        duration: "26h 30m",
        severity: "medium",
    },
    {
        id: "HR-552",
        task: "Contract Signature",
        owner: "Hiring Manager",
        status: "Pending",
        duration: "25h 10m",
        severity: "medium",
    },
]

export function BottleneckTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Task</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {bottlenecks.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell className="font-mono text-xs font-medium">{item.id}</TableCell>
                        <TableCell className="font-medium">{item.task}</TableCell>
                        <TableCell>{item.owner}</TableCell>
                        <TableCell className="font-mono text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Clock className="h-3 w-3" />
                                {item.duration}
                            </div>
                        </TableCell>
                        <TableCell>
                            <Badge
                                variant={item.severity === "critical" ? "destructive" : item.severity === "high" ? "secondary" : "outline"}
                                className={item.severity === "high" ? "bg-amber-500/15 text-amber-500 hover:bg-amber-500/25 border-amber-500/20" : ""}
                            >
                                {item.status}
                            </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                            <Button size="sm" variant="ghost" className="h-8 gap-1">
                                Nudge <ArrowRight className="h-3 w-3" />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
