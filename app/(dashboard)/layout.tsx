import type { CSSProperties, ReactNode } from "react"

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

const dashboardSidebarStyle = {
  "--sidebar-width": "22.5rem",
  "--sidebar-width-icon": "4rem",
} as CSSProperties

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <SidebarProvider defaultOpen style={dashboardSidebarStyle}>
      <AppSidebar />
      <SidebarInset className="bg-[#14161b]">{children}</SidebarInset>
    </SidebarProvider>
  )
}