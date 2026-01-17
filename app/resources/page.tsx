"use client"

import { Sidebar } from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/Header"
import { TeamCapacity } from "@/components/resources/TeamCapacity"
import { InventoryHealth } from "@/components/resources/InventoryHealth"
import { Button } from "@/components/ui/button"
import { Plus, Lock } from "lucide-react"
import { AllocateResourceDialog } from "@/components/resources/AllocateResourceDialog"
import { useRole } from "@/components/auth/RoleContext"

export default function ResourcePage() {
    const { role } = useRole()
    return (
        <div className="flex min-h-screen bg-background text-foreground font-sans">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Header />
                <main className="flex-1 p-6 md:p-8 space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight">Resource Planner</h2>
                            <p className="text-muted-foreground">Manage team workload and operational capacity.</p>
                        </div>
                        {role === 'Admin' ? (
                            <AllocateResourceDialog />
                        ) : (
                            <Button variant="outline" disabled className="gap-2 opacity-50 cursor-not-allowed">
                                <Lock className="h-4 w-4" />
                                Allocation Locked
                            </Button>
                        )}
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Team Capacity */}
                        <div className="rounded-xl border bg-card text-card-foreground shadow h-full">
                            <div className="p-6 border-b border-border/50">
                                <h3 className="text-lg font-semibold">Team Capacity</h3>
                                <p className="text-sm text-muted-foreground">Current workload distribution across departments.</p>
                            </div>
                            <div className="p-6">
                                <TeamCapacity />
                            </div>
                        </div>

                        {/* Inventory Summary (Placeholder for now, or mini table) */}
                        <div className="rounded-xl border bg-card text-card-foreground shadow h-full">
                            <div className="p-6 border-b border-border/50">
                                <h3 className="text-lg font-semibold">Inventory Health</h3>
                                <p className="text-sm text-muted-foreground">Stock levels and predicted depletion.</p>
                            </div>
                            <div className="p-6">
                                <InventoryHealth />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
