"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BottleneckTable } from "@/components/workflows/BottleneckTable"
import { AutomationLogTable } from "@/components/workflows/AutomationLogTable"
import { Sidebar } from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/Header"

export default function WorkflowsPage() {
    return (
        <div className="flex min-h-screen bg-background text-foreground font-sans">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Header />
                <main className="flex-1 p-6 md:p-8 space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Workflow Engine</h2>
                        <p className="text-muted-foreground">Manage operational bottlenecks and audit automation history.</p>
                    </div>

                    <Tabs defaultValue="bottlenecks" className="space-y-4">
                        <TabsList>
                            <TabsTrigger value="bottlenecks">Bottleneck Finder</TabsTrigger>
                            <TabsTrigger value="automation">Automation Logs</TabsTrigger>
                        </TabsList>
                        <TabsContent value="bottlenecks" className="space-y-4">
                            <div className="rounded-xl border bg-card text-card-foreground shadow">
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold mb-1">Stuck Workflows</h3>
                                    <p className="text-sm text-muted-foreground mb-6">Tasks pending for more than 24 hours.</p>
                                    <BottleneckTable />
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="automation" className="space-y-4">
                            <div className="rounded-xl border bg-card text-card-foreground shadow">
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold mb-1">System Activity</h3>
                                    <p className="text-sm text-muted-foreground mb-6">Automated actions handled by OpsCommand today.</p>
                                    <AutomationLogTable />
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
        </div>
    )
}
