"use client"

import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { HealthOrbs } from "@/components/dashboard/HealthOrbs";
import { PulseFeed } from "@/components/dashboard/PulseFeed";
import { KpiGrid } from "@/components/dashboard/KpiGrid";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { WorkflowChart } from "@/components/dashboard/WorkflowChart";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans">
      <Sidebar />
      <div className="flex flex-1 flex-col transition-all duration-300 ease-in-out">
        <Header />
        <main className="flex-1 p-6 md:p-8 space-y-8 overflow-y-auto max-h-[calc(100vh-4rem)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Command Center</h2>
              <p className="text-muted-foreground">Real-time operational intelligence.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Export Report
              </Button>
            </div>
          </div>

          {/* Global Health Orbs */}
          <HealthOrbs />

          {/* KPI Grid */}
          <KpiGrid />

          {/* Pulse Feed */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <div className="col-span-4 rounded-xl border bg-card text-card-foreground shadow p-6">
              <h3 className="mb-4 text-lg font-semibold">Active Workflows</h3>
              <WorkflowChart />
            </div>
            <div className="col-span-3">
              <PulseFeed />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
