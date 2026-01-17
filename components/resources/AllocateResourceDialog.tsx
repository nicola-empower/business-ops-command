"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

export function AllocateResourceDialog() {
    const [open, setOpen] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Mock submission logic
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Allocate Resource
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Allocate Resource</DialogTitle>
                    <DialogDescription>
                        Assign a new task or increase workload for a team member.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="member" className="text-right">
                            Member
                        </Label>
                        <Select>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select team member" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="sarah">Sarah Connors (Ops Lead)</SelectItem>
                                <SelectItem value="mike">Mike Chen (Fulfillment)</SelectItem>
                                <SelectItem value="jessica">Jessica Wu (CS)</SelectItem>
                                <SelectItem value="david">David Miller (Logistics)</SelectItem>
                                <SelectItem value="alex">Alex Johnson (Finance)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="task" className="text-right">
                            Task
                        </Label>
                        <Input id="task" placeholder="e.g. Q3 Audit" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="effort" className="text-right">
                            Effort (%)
                        </Label>
                        <div className="col-span-3 flex items-center gap-2">
                            <Input id="effort" type="number" defaultValue="20" className="w-[80px]" />
                            <span className="text-muted-foreground text-sm">capacity load</span>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Allocate</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
