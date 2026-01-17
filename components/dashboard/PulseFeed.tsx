import {
    CheckCircle2,
    AlertTriangle,
    XCircle,
    ShoppingCart,
    Truck,
    CreditCard
} from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

const events = [
    {
        id: 1,
        title: "Order #49281 Shipped",
        desc: "Warehouse A (Standard Shipping)",
        time: "2m ago",
        type: "success",
        icon: Truck
    },
    {
        id: 2,
        title: "Payment Failed",
        desc: "Subscription renewal for User 9281",
        time: "14m ago",
        type: "error",
        icon: CreditCard
    },
    {
        id: 3,
        title: "Low Inventory Alert",
        desc: "SKU-992 (Blue Widget) < 15 units",
        time: "45m ago",
        type: "warning",
        icon: ShoppingCart
    },
    {
        id: 4,
        title: "New High Value Order",
        desc: "$2,400 Corporate Order received",
        time: "1h ago",
        type: "success",
        icon: CheckCircle2
    },
    {
        id: 5,
        title: "API Latency Spike",
        desc: "Checkout API > 300ms",
        time: "2h ago",
        type: "warning",
        icon: AlertTriangle
    }
]

export function PulseFeed() {
    return (
        <div className="rounded-xl border bg-card text-card-foreground shadow h-full flex flex-col">
            <div className="p-6 border-b border-border/50">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                    </span>
                    The Pulse
                </h3>
                <p className="text-sm text-muted-foreground">Real-time system activity.</p>
            </div>
            <div className="flex-1 p-0">
                <div className="flex flex-col">
                    {events.map((event, i) => (
                        <div key={event.id} className={`flex items-start gap-4 p-4 border-b border-border/50 hover:bg-muted/50 transition-colors ${i === events.length - 1 ? 'border-0' : ''}`}>
                            <div className={`mt-1 p-2 rounded-full ring-1 shadow-sm ${event.type === 'success' ? 'bg-emerald-500/10 text-emerald-500 ring-emerald-500/20' :
                                    event.type === 'warning' ? 'bg-amber-500/10 text-amber-500 ring-amber-500/20' :
                                        'bg-rose-500/10 text-rose-500 ring-rose-500/20'
                                }`}>
                                <event.icon className="h-4 w-4" />
                            </div>
                            <div className="flex-1 space-y-1">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium leading-none">{event.title}</p>
                                    <span className="text-xs text-muted-foreground tabular-nums">{event.time}</span>
                                </div>
                                <p className="text-xs text-muted-foreground">{event.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-4 border-t border-border/50 bg-muted/20 rounded-b-xl">
                <button className="text-xs text-center w-full text-muted-foreground hover:text-foreground">View Full Audit Log</button>
            </div>
        </div>
    )
}
