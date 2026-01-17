"use client"

import { Sidebar } from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { InventoryTable } from "@/components/resources/InventoryTable"
import { Plus } from "lucide-react"

export default function InventoryPage() {
    return (
        <div className="flex min-h-screen bg-background text-foreground font-sans">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Header />
                <main className="flex-1 p-6 md:p-8 space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight">Inventory</h2>
                            <p className="text-muted-foreground">Manage stock levels across UK depots.</p>
                        </div>
                        <Button className="gap-2">
                            <Plus className="h-4 w-4" />
                            Add Item
                        </Button>
                    </div>

                    <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
                        <InventoryTable />
                    </div>
                </main>
            </div>
        </div>
    )
}
