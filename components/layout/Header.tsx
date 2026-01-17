import { CommandPalette } from "@/components/command-palette"
import { Bell } from "lucide-react"

export function Header() {
    return (
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 px-6 backdrop-blur-md">
            <div className="flex flex-1 items-center gap-4">
                <h1 className="text-lg font-semibold tracking-tight">Dashboard</h1>
                {/* Breadcrumbs can go here */}
            </div>

            <div className="flex items-center gap-4">
                <CommandPalette />
                <button className="relative rounded-full p-2 hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-background animate-pulse" />
                </button>
            </div>
        </header>
    )
}
