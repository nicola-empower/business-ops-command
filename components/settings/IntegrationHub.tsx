"use client"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Hash, Trello, Database } from "lucide-react"

const integrations = [
    {
        name: "Stripe",
        desc: "Payment processing and revenue metrics.",
        icon: CreditCard,
        connected: true,
        status: "Healthy",
    },
    {
        name: "Slack",
        desc: "Team notifications and alerts.",
        icon: Hash,
        connected: true,
        status: "Active",
    },
    {
        name: "Jira / Linear",
        desc: "Sync project tasks and workflows.",
        icon: Trello,
        connected: false,
        status: "Disconnected",
    },
    {
        name: "Supabase",
        desc: "Main database connection.",
        icon: Database,
        connected: true,
        status: "Healthy",
    },
]

export function IntegrationHub() {
    return (
        <div className="space-y-6">
            {integrations.map((item) => (
                <div key={item.name} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                            <item.icon className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                            <div className="font-medium flex items-center gap-2">
                                {item.name}
                                {item.connected && (
                                    <Badge variant="outline" className="text-[10px] h-4 px-1 text-emerald-500 border-emerald-500/20 bg-emerald-500/10">
                                        {item.status}
                                    </Badge>
                                )}
                            </div>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Switch checked={item.connected} />
                        <Button variant="ghost" size="sm">Configure</Button>
                    </div>
                </div>
            ))}
        </div>
    )
}
