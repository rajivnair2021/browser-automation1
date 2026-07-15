"use client"

import {
  Bot,
  Compass,
  Leaf,
  Plus,
  ShieldCheck,
  Sparkles,
  WandSparkles,
  Waypoints,
  Workflow,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const workflows = [
  { name: "dominant-wasp", icon: Workflow },
  { name: "honest-reindeer", icon: Compass },
  { name: "expected-llama", icon: Bot },
  { name: "essential-ocelot", icon: ShieldCheck },
  { name: "creepy-echidna", icon: Sparkles },
  { name: "eastern-silkworm", icon: Waypoints },
  { name: "cultural-lion", icon: Leaf },
  { name: "proud-weasel", icon: WandSparkles },
  { name: "regional-bonobo", icon: Workflow },
]

export function WorkflowNav() {
  return (
    <SidebarGroup className="p-0">
      <div className="mb-2 flex items-center justify-between px-2.5">
        <SidebarGroupLabel className="h-auto p-0 text-xs font-semibold tracking-[0.08em] text-neutral-400 uppercase">
          Workflows
        </SidebarGroupLabel>
        <Button
          variant="ghost"
          size="icon"
          className="size-9 rounded-lg text-neutral-200 hover:bg-white/8 hover:text-white"
        >
          <Plus className="size-5" strokeWidth={2.4} />
        </Button>
      </div>

      <SidebarGroupContent>
        <SidebarMenu className="gap-1">
          {workflows.map((workflow, index) => (
            <SidebarMenuItem key={workflow.name}>
              <SidebarMenuButton
                isActive={index === 0}
                className="h-11 rounded-xl px-3 text-sm font-medium tracking-tight text-neutral-200 data-active:bg-white/6 data-active:text-white"
              >
                <workflow.icon className="size-4" />
                <span className="group-data-[collapsible=icon]:hidden">
                  {workflow.name}
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}