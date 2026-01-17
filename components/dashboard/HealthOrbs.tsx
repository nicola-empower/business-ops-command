import { ArrowUpRight, ArrowDownRight, Activity } from "lucide-react"

const departments = [
    {
        name: "Sales",
        status: "healthy",
        value: "98.2%",
        trend: "+2.1%",
        signal: "active"
    },
    {
        name: "Ops",
        status: "warning",
        value: "84.5%",
        trend: "-4.3%",
        signal: "warning"
    },
    {
        name: "Tech",
        status: "critical",
        value: "99.9%",
        trend: "+0.1%",
        signal: "critical"
    },
    {
        name: "Finance",
        status: "healthy",
        value: "$1.2M",
        trend: "+12%",
        signal: "active"
    }
]

export function HealthOrbs() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept) => (
                <div key={dept.name} className="relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">

                    {/* Status Orb Indicator */}
                    <div className="absolute right-4 top-4">
                        <span className={`relative flex h-3 w-3`}>
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dept.status === 'healthy' ? 'bg-emerald-500' :
                                    dept.status === 'warning' ? 'bg-amber-500' : 'bg-rose-500'
                                }`}></span>
                            <span className={`relative inline-flex rounded-full h-3 w-3 ${dept.status === 'healthy' ? 'bg-emerald-500' :
                                    dept.status === 'warning' ? 'bg-amber-500' : 'bg-rose-500'
                                }`}></span>
                        </span>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <Activity className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">{dept.name}</span>
                    </div>

                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold">{dept.value}</span>
                    </div>

                    <div className={`mt-2 flex items-center gap-1 text-xs font-medium ${dept.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'
                        }`}>
                        {dept.trend.startsWith('+') ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                        {dept.trend} vs last week
                    </div>
                </div>
            ))}
        </div>
    )
}
