"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

type Route = {
  id: number
  name: string
  type: string
  fee: string
  speed: string
  reliability: number
  coverage: string
}

const defaultData: Route[] = [
  { id: 0, name: "Pontus Route", type: "AI Optimized", fee: "0.05%", speed: "Instant", reliability: 5.0, coverage: "200+ countries" },
  { id: 1, name: "Wise", type: "Digital Rail", fee: "0.4%", speed: "1-2 days", reliability: 4.7, coverage: "160+ countries" },
  { id: 2, name: "Nium", type: "Digital Rail", fee: "0.6%", speed: "1-3 days", reliability: 4.5, coverage: "190+ countries" },
  { id: 3, name: "Bank Transfer", type: "Traditional", fee: "3-7%", speed: "3-7 days", reliability: 4.2, coverage: "Global" },
  { id: 4, name: "Stablecoin Transfer", type: "Crypto Rail", fee: "0.2-0.6%", speed: "Minutes", reliability: 4.4, coverage: "100+ countries" },
  { id: 5, name: "Crypto Bridge", type: "Crypto Rail", fee: "0.3-1.2%", speed: "10-30 min", reliability: 4.2, coverage: "Cross-chain" },
  { id: 6, name: "Layer 2 Network", type: "Crypto Rail", fee: "0.1-0.3%", speed: "Seconds", reliability: 4.3, coverage: "Ethereum ecosystem" },
  { id: 7, name: "On/Off Ramp", type: "Hybrid", fee: "0.6-2.5%", speed: "1-24 hours", reliability: 4.0, coverage: "50+ countries" },
  { id: 8, name: "Local Payment Corridor", type: "Regional", fee: "0.2-1.2%", speed: "Same day", reliability: 4.6, coverage: "Regional" },
]

export default function ComparisonTable() {
  const [selected, setSelected] = React.useState<number[]>([])
  const [search, setSearch] = React.useState("")
  const [type, setType] = React.useState<string>("all")

  const toggleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : prev.length < 2 ? [...prev, id] : prev
    )
  }

  const resetSelection = () => setSelected([])

  const filteredData = defaultData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.type.toLowerCase().includes(search.toLowerCase())
    const matchesType = type === "all" || item.type === type
    return matchesSearch && matchesType
  })

  const comparedItems = defaultData.filter((item) => selected.includes(item.id))

  return (
    <div className="w-full">
      <div className="mb-8 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
          Compare Payment Routes
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Select up to two routes to compare fees, speed, reliability, and coverage
        </p>
      </div>
      <Card className="w-full bg-black border-white/10">
        <CardContent className="p-6">

          {/* Filters */}
          <div className="flex items-center gap-3 mb-6">
            <Input
              placeholder="Search routes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-xs bg-white/5 border-white/10 text-white placeholder:text-gray-400"
            />
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="w-[200px] bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent className="bg-black border-white/10">
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="AI Optimized">AI Optimized</SelectItem>
                <SelectItem value="Digital Rail">Digital Rail</SelectItem>
                <SelectItem value="Traditional">Traditional</SelectItem>
                <SelectItem value="Crypto Rail">Crypto Rail</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
                <SelectItem value="Regional">Regional</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={resetSelection} className="border-white/10 text-white hover:bg-white/10">
              Reset
            </Button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-white/10">
                  <TableHead className="text-white">Route</TableHead>
                  <TableHead className="text-white">Type</TableHead>
                  <TableHead className="text-white">Fee</TableHead>
                  <TableHead className="text-white">Speed</TableHead>
                  <TableHead className="text-white">Reliability</TableHead>
                  <TableHead className="text-white">Coverage</TableHead>
                  <TableHead className="text-white">Select</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item) => (
                  <TableRow
                    key={item.id}
                    className={cn(
                      "border-white/10",
                      selected.includes(item.id) && "bg-white/5"
                    )}
                  >
                    <TableCell className="p-3 text-white font-medium">{item.name}</TableCell>
                    <TableCell className="p-3 text-gray-400">{item.type}</TableCell>
                    <TableCell className="p-3 text-white">{item.fee}</TableCell>
                    <TableCell className="p-3 text-gray-400">{item.speed}</TableCell>
                    <TableCell className="p-3 text-white">{item.reliability}/5.0</TableCell>
                    <TableCell className="p-3 text-gray-400">{item.coverage}</TableCell>
                    <TableCell className="p-3">
                      <Button
                        variant={selected.includes(item.id) ? "destructive" : "outline"}
                        size="sm"
                        className={selected.includes(item.id) ? "text-white" : "border-white/10 text-white hover:bg-white/10"}
                        onClick={() => toggleSelect(item.id)}
                      >
                        {selected.includes(item.id) ? "Remove" : "Compare"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Comparison view */}
          {comparedItems.length === 2 && (
            <div className="mt-8 border-t border-white/10 pt-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Route Comparison</h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="font-semibold text-white">Attribute</div>
                <div className="font-semibold text-white">{comparedItems[0].name}</div>
                <div className="font-semibold text-white">{comparedItems[1].name}</div>

                <div className="text-gray-400">Fee</div>
                <div className="text-white">
                  {comparedItems[0].fee}
                </div>
                <div className="text-white">
                  {comparedItems[1].fee}
                </div>

                <div className="text-gray-400">Speed</div>
                <div className="text-white">{comparedItems[0].speed}</div>
                <div className="text-white">{comparedItems[1].speed}</div>

                <div className="text-gray-400">Reliability</div>
                <div className={cn("text-white", comparedItems[0].reliability > comparedItems[1].reliability && "text-green-400 font-medium")}>
                  {comparedItems[0].reliability}/5.0
                </div>
                <div className={cn("text-white", comparedItems[1].reliability > comparedItems[0].reliability && "text-green-400 font-medium")}>
                  {comparedItems[1].reliability}/5.0
                </div>

                <div className="text-gray-400">Coverage</div>
                <div className="text-white">{comparedItems[0].coverage}</div>
                <div className="text-white">{comparedItems[1].coverage}</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
