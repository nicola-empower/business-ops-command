"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    Command,
    Workflow,
    BarChart3,
    Settings,
    Box,
    HelpCircle,
    LogOut,
    ChevronUp,
    UserCircle
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useRole } from "@/components/auth/RoleContext"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigation = [
    { name: "Command Center", href: "/", icon: LayoutDashboard },
    { name: "Workflows", href: "/workflows", icon: Workflow },
    { name: "Resource Planner", href: "/resources", icon: BarChart3 },
    { name: "Inventory", href: "/inventory", icon: Box },
    { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
    const pathname = usePathname()
    const { role, setRole } = useRole()

    return (
        <div className="hidden border-r bg-sidebar md:block md:w-64 lg:w-72">
            <div className="flex h-full flex-col">
                {/* Header / Logo */}
                <div className="flex h-16 items-center px-6 border-b border-sidebar-border/50">
                    <Link href="/" className="flex items-center gap-2 font-bold text-lg text-sidebar-foreground">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            <Command className="h-5 w-5" />
                        </div>
                        <span>OpsCommand</span>
                    </Link>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto py-6 px-3">
                    <nav className="flex flex-col gap-1">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                        isActive
                                            ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm ring-1 ring-inset ring-sidebar-border"
                                            : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                                    )}
                                >
                                    <item.icon className={cn("h-4 w-4 shrink-0", isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary")} />
                                    {item.name}
                                </Link>
                            )
                        })}
                    </nav>
                </div>

                {/* Footer */}
                <div className="border-t border-sidebar-border/50 p-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="flex w-full items-center gap-3 rounded-lg bg-sidebar-accent/30 p-3 shadow-sm border border-sidebar-border/50 hover:bg-sidebar-accent/50 transition-colors text-left">
                                <div className="h-9 w-9 shrink-0 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 text-indigo-500">
                                    {role === 'Admin' ? 'JD' : 'JS'}
                                </div>
                                <div className="flex flex-col overflow-hidden flex-1">
                                    <span className="truncate text-sm font-medium text-sidebar-foreground">
                                        {role === 'Admin' ? 'John Doe' : 'Jane Smith'}
                                    </span>
                                    <span className="truncate text-xs text-muted-foreground">{role}</span>
                                </div>
                                <ChevronUp className="h-4 w-4 text-muted-foreground" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-[220px]">
                            <DropdownMenuLabel>Switch Role (Demo)</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => setRole("Admin")}>
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-indigo-500" />
                                    <span>Admin (John Doe)</span>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setRole("Staff")}>
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                                    <span>Staff (Jane Smith)</span>
                                </div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}
