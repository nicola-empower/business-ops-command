"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

const team = [
    {
        name: "Sarah Connors",
        role: "Ops Lead",
        load: 120, // Overloaded
        status: "overloaded",
        tasks: 12,
    },
    {
        name: "Mike Chen",
        role: "Fulfillment",
        load: 85,
        status: "healthy",
        tasks: 8,
    },
    {
        name: "Jessica Wu",
        role: "Customer Success",
        load: 45,
        status: "underutilized",
        tasks: 4,
    },
    {
        name: "David Miller",
        role: "Logistics",
        load: 92,
        status: "warning",
        tasks: 9,
    },
    {
        name: "Alex Johnson",
        role: "Finance",
        load: 60,
        status: "healthy",
        tasks: 6,
    },
]

export function TeamCapacity() {
    return (
        <div className="space-y-6">
            {team.map((member) => (
                <div key={member.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="font-medium">{member.name}</div>
                                <div className="text-xs text-muted-foreground">{member.role}</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className={`font-medium ${member.load > 100 ? "text-rose-500" :
                                    member.load > 90 ? "text-amber-500" : "text-emerald-500"
                                }`}>
                                {member.load}%
                            </div>
                            <div className="text-xs text-muted-foreground">{member.tasks} active tasks</div>
                        </div>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div
                            className={`h-full rounded-full ${member.load > 100 ? "bg-rose-500" :
                                    member.load > 90 ? "bg-amber-500" : "bg-emerald-500"
                                }`}
                            style={{ width: `${Math.min(member.load, 100)}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
