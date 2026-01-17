"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"

// Mock Data with UK English and GBP
const inventory = [
    {
        sku: "LND-001",
        name: "Ergonomic Office Chair - Oxford Grey",
        category: "Furniture",
        stock: 45,
        reorderLevel: 20,
        price: 189.99,
        status: "In Stock",
        location: "London Depot",
    },
    {
        sku: "MAN-299",
        name: "Wireless Keyboard - UK Layout",
        category: "Electronics",
        stock: 12,
        reorderLevel: 15,
        price: 45.50,
        status: "Low Stock",
        location: "Manchester Hub",
    },
    {
        sku: "BRS-102",
        name: "Standing Desk Converter",
        category: "Furniture",
        stock: 0,
        reorderLevel: 10,
        price: 129.00,
        status: "Out of Stock",
        location: "Bristol Centre",
    },
    {
        sku: "GLA-554",
        name: "Noise Cancelling Headphones",
        category: "Electronics",
        stock: 89,
        reorderLevel: 25,
        price: 249.99,
        status: "In Stock",
        location: "Glasgow Warehouse",
    },
    {
        sku: "LND-003",
        name: "Monitor Stand - Aluminium",
        category: "Accessories",
        stock: 156,
        reorderLevel: 30,
        price: 34.95,
        status: "In Stock",
        location: "London Depot",
    },
    {
        sku: "MAN-882",
        name: "USB-C Docking Station",
        category: "Electronics",
        stock: 8,
        reorderLevel: 10,
        price: 89.99,
        status: "Critical Low",
        location: "Manchester Hub",
    },
    {
        sku: "EDI-441",
        name: "Webcam 4K Ultra",
        category: "Electronics",
        stock: 34,
        reorderLevel: 15,
        price: 115.00,
        status: "In Stock",
        location: "Edinburgh Branch",
    }
]

export function InventoryTable() {
    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">SKU</TableHead>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead className="text-right">Unit Price</TableHead>
                        <TableHead className="text-right">Stock</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {inventory.map((item) => (
                        <TableRow key={item.sku}>
                            <TableCell className="font-mono text-xs font-medium text-muted-foreground">
                                {item.sku}
                            </TableCell>
                            <TableCell className="font-medium">{item.name}</TableCell>
                            <TableCell>{item.category}</TableCell>
                            <TableCell>{item.location}</TableCell>
                            <TableCell className="text-right font-mono">
                                £{item.price.toFixed(2)}
                            </TableCell>
                            <TableCell className="text-right tabular-nums">
                                {item.stock}
                            </TableCell>
                            <TableCell>
                                <Badge
                                    variant="outline"
                                    className={
                                        item.status === "In Stock"
                                            ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-500"
                                            : item.status === "Low Stock"
                                                ? "border-amber-500/20 bg-amber-500/10 text-amber-500"
                                                : item.status === "Critical Low"
                                                    ? "border-rose-500/20 bg-rose-500/10 text-rose-500"
                                                    : "border-slate-500/20 bg-slate-500/10 text-muted-foreground"
                                    }
                                >
                                    {item.status}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
