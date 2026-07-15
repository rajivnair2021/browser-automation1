"use client"

import { Plus, Workflow } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export default function DashboardPage() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-linear-to-r from-[#141517] via-[#15161a] to-[#171a1f] px-6 py-10 md:px-10">
      <Empty className="max-w-5xl border-none p-0">
        <EmptyHeader className="max-w-5xl gap-5">
          <EmptyMedia className="size-16 rounded-2xl bg-white/5 ring-1 ring-white/5">
            <Workflow className="size-8 text-white/90" strokeWidth={2.2} />
          </EmptyMedia>

          <div className="space-y-3 text-center">
            <EmptyTitle className="text-3xl font-semibold tracking-tight text-neutral-100 sm:text-5xl lg:text-6xl">
              No workflow selected
            </EmptyTitle>

            <EmptyDescription className="mx-auto max-w-3xl text-base leading-relaxed text-neutral-400 sm:text-lg lg:text-xl">
              Select a workflow from the sidebar
              <br />
              or create a new one to get started.
            </EmptyDescription>
          </div>
        </EmptyHeader>

        <EmptyContent className="mt-8">
          <Button
            className="h-12 rounded-xl bg-neutral-100 px-6 text-base font-semibold tracking-tight text-neutral-900 hover:bg-neutral-100/95"
            size="lg"
          >
            <Plus className="size-5!" strokeWidth={2.7} />
            New workflow
          </Button>
        </EmptyContent>
      </Empty>
    </main>
  )
}