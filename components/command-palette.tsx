"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
    Search,
    LayoutDashboard,
    BarChart3,
    Users,
    Box,
    Workflow,
    AlertTriangle
} from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

export function CommandPalette() {
    const [open, setOpen] = React.useState(false)
    const router = useRouter()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 rounded-md border border-input bg-background/50 px-3 py-1.5 text-sm font-medium text-muted-foreground shadow-sm hover:bg-accent hover:text-accent-foreground sm:w-64"
            >
                <Search className="h-4 w-4" />
                <span className="hidden lg:inline-flex">Search command center...</span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute right-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Navigation">
                        <CommandItem onSelect={() => runCommand(() => router.push('/'))}>
                            <LayoutDashboard className="mr-2 h-4 w-4" />
                            <span>Dashboard</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => router.push('/workflows'))}>
                            <Workflow className="mr-2 h-4 w-4" />
                            <span>Workflows</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => router.push('/resources'))}>
                            <BarChart3 className="mr-2 h-4 w-4" />
                            <span>Resource Planner</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => router.push('/inventory'))}>
                            <Box className="mr-2 h-4 w-4" />
                            <span>Inventory</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => router.push('/settings'))}>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Actions">
                        <CommandItem onSelect={() => runCommand(() => router.push('/resources'))}>
                            <Users className="mr-2 h-4 w-4" />
                            <span>Add Team Member</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => router.push('/workflows'))}>
                            <AlertTriangle className="mr-2 h-4 w-4" />
                            <span>Report Incident</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
