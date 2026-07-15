import type { CSSProperties } from "react"
import {
  Building2,
  ChevronDown,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { WorkflowNav } from "@/features/workflows/components/workflow-nav"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const sidebarThemeStyle = {
  "--sidebar": "#171a1f",
  "--sidebar-foreground": "#f4f5f6",
  "--sidebar-border": "rgba(255,255,255,0.06)",
  "--sidebar-accent": "rgba(255,255,255,0.06)",
  "--sidebar-accent-foreground": "#f4f5f6",
  "--sidebar-ring": "rgba(255,255,255,0.18)",
} as CSSProperties

export function AppSidebar() {
  return (
    <Sidebar
      className="border-r border-white/5"
      style={sidebarThemeStyle}
      collapsible="icon"
    >
      <SidebarHeader className="px-3 pt-4 pb-2">
        <div className="flex items-center justify-between gap-3">
          <Button
            variant="ghost"
            className="h-auto min-w-0 flex-1 justify-start gap-3 px-1 text-left hover:bg-transparent group-data-[collapsible=icon]:size-10! group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-[#a855f7] to-[#4f46e5] text-white">
              <Building2 className="size-5" strokeWidth={2.4} />
            </span>
            <span className="truncate text-xl font-semibold tracking-tight text-neutral-200 group-data-[collapsible=icon]:hidden">
              Bar Inc.
            </span>
            <ChevronDown
              className="size-5 text-neutral-400 group-data-[collapsible=icon]:hidden"
              strokeWidth={2.4}
            />
          </Button>

          <SidebarTrigger className="size-9 shrink-0 rounded-lg text-neutral-300 hover:bg-white/8 hover:text-white group-data-[collapsible=icon]:size-8" />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 pb-4">
        <WorkflowNav />
      </SidebarContent>

      <SidebarFooter className="mt-auto px-4 pb-5 pt-3">
        <Button
          variant="ghost"
          className="size-12 rounded-full bg-[#7f1fb7] text-base font-semibold text-white hover:bg-[#8d25c9]"
        >
          A
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}