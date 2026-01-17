"use client"

import { Sidebar } from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/Header"
import { IntegrationHub } from "@/components/settings/IntegrationHub"
import { useRole } from "@/components/auth/RoleContext"
import { Lock } from "lucide-react"

export default function SettingsPage() {
    const { role } = useRole()
    return (
        <div className="flex min-h-screen bg-background text-foreground font-sans">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Header />
                <main className="flex-1 p-6 md:p-8 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-bold tracking-tight">Intelligence & Customisation</h2>
                        {role !== 'Admin' && (
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium">
                                <Lock className="h-4 w-4" />
                                Read-Only Access
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}
