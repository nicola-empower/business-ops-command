"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, AlertOctagon, TrendingDown, Package, Radio, Truck, MapPin, Undo2 } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

export function KpiGrid() {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            {/* Widget 1: Fulfillment Velocity - Hero Interaction */}
            <Dialog>
                <DialogTrigger asChild>
                    <Card className="border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-all cursor-pointer group hover:bg-muted/50">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Fulfillment Velocity</CardTitle>
                            <Package className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold tabular-nums">12% Slower</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Warehouse B is lagging behind benchmarks today.
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-amber-500 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                <AlertOctagon className="h-3 w-3" />
                                Investigate Delay
                                <ArrowRight className="h-3 w-3 ml-auto" />
                            </div>
                        </CardContent>
                    </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-amber-500">
                            <AlertOctagon className="h-5 w-5" />
                            Delay Alert: Warehouse B
                        </DialogTitle>
                        <DialogDescription>
                            Analyzed dependency chain for Northeast Region fulfillment.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                        <div className="relative">
                            {/* Simple Dependency Map Visualization */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border -z-10" />

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                                        <Radio className="h-5 w-5 text-emerald-500" />
                                    </div>
                                    <div className="rounded-lg border p-3 bg-card flex-1">
                                        <div className="font-semibold text-sm">Order Received</div>
                                        <div className="text-xs text-muted-foreground">10:42 AM - Automatically processed</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                                        <Package className="h-5 w-5 text-emerald-500" />
                                    </div>
                                    <div className="rounded-lg border p-3 bg-card flex-1">
                                        <div className="font-semibold text-sm">Inventory Check</div>
                                        <div className="text-xs text-muted-foreground">10:43 AM - Stock confirmed (Unit-291)</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 animate-pulse">
                                        <Truck className="h-5 w-5 text-rose-500" />
                                    </div>
                                    <div className="rounded-lg border border-rose-500/50 p-3 bg-rose-500/5 flex-1">
                                        <div className="font-semibold text-sm text-rose-500">Logistics Handover (Late)</div>
                                        <div className="text-xs text-rose-400">Current Status: Pending Pickup</div>
                                        <div className="mt-2 text-xs bg-background/50 p-2 rounded">
                                            <strong>Root Cause detected:</strong> "FastShip Logistics" driver is delayed by 45 mins due to traffic in Sector 4.
                                        </div>
                                        <div className="mt-2 flex gap-2">
                                            <Button size="sm" variant="destructive" className="h-7 text-xs">Reroute to Warehouse A</Button>
                                            <Button size="sm" variant="outline" className="h-7 text-xs">Notify Customer</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Widget 2: Return Flux - Interaction Added */}
            <Dialog>
                <DialogTrigger asChild>
                    <Card className="border-l-4 border-l-rose-500 shadow-sm hover:shadow-md transition-all cursor-pointer group hover:bg-muted/50">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Return Flux</CardTitle>
                            <TrendingDown className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold tabular-nums text-rose-500">+8.4%</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Unusual refund spike for <strong>&quot;Item X&quot;</strong>.
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-rose-500 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                Review Recent Returns
                                <ArrowRight className="h-3 w-3 ml-auto" />
                            </div>
                        </CardContent>
                    </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-rose-500">
                            <Undo2 className="h-5 w-5" />
                            Recent Return Requests
                        </DialogTitle>
                        <DialogDescription>
                            Showing recent returns for <strong>"Item X"</strong> (Last 24h)
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-2">
                        <div className="rounded-md border">
                            <div className="grid grid-cols-1 divide-y">
                                <div className="p-3 text-sm flex items-center justify-between">
                                    <div className="space-y-1">
                                        <div className="font-medium">Order #9921</div>
                                        <div className="text-xs text-muted-foreground">Reason: "Incompatible with setup"</div>
                                    </div>
                                    <Badge variant="outline" className="border-amber-500 text-amber-500">Pending</Badge>
                                </div>
                                <div className="p-3 text-sm flex items-center justify-between">
                                    <div className="space-y-1">
                                        <div className="font-medium">Order #9884</div>
                                        <div className="text-xs text-muted-foreground">Reason: "Defective on arrival"</div>
                                    </div>
                                    <Badge variant="outline" className="border-rose-500 text-rose-500">Flagged</Badge>
                                </div>
                                <div className="p-3 text-sm flex items-center justify-between">
                                    <div className="space-y-1">
                                        <div className="font-medium">Order #9822</div>
                                        <div className="text-xs text-muted-foreground">Reason: "Ordered wrong size"</div>
                                    </div>
                                    <Badge variant="outline" className="border-emerald-500 text-emerald-500">Approved</Badge>
                                </div>
                            </div>
                        </div>
                        <Button className="w-full" variant="outline">Download Full CSV Report</Button>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Widget 3: Ad-to-Inventory */}
            <Card className="border-l-4 border-l-indigo-500 shadow-sm hover:shadow-md transition-all cursor-pointer group">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Ad-to-Inventory</CardTitle>
                    <Radio className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold tabular-nums">4 Hours Left</div>
                    <p className="text-xs text-muted-foreground mt-1">
                        Stock for <strong>&quot;Item Y&quot;</strong> will deplete before ad budget.
                    </p>
                    <div className="mt-4">
                        <Button variant="secondary" size="sm" className="w-full text-xs h-7">
                            Turn off Ads for Item Y
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
