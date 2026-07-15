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

export default function Page() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-linear-to-r from-[#141517] via-[#15161a] to-[#171a1f] px-6 py-10">
      <Empty className="max-w-176 border-none p-0">
        <EmptyHeader className="max-w-176 gap-7">
          <EmptyMedia className="size-24 rounded-3xl bg-white/5 ring-1 ring-white/5">
            <Workflow className="size-11 text-white/90" strokeWidth={2.2} />
          </EmptyMedia>

          <div className="space-y-5 text-center">
            <EmptyTitle className="text-6xl font-semibold tracking-[-0.02em] text-neutral-100 sm:text-7xl">
              No workflow selected
            </EmptyTitle>

            <EmptyDescription className="mx-auto max-w-160 text-3xl leading-[1.35] text-neutral-400 sm:text-[3rem]">
              Select a workflow from the sidebar
              <br />
              or create a new one to get started.
            </EmptyDescription>
          </div>
        </EmptyHeader>

        <EmptyContent className="mt-12">
          <Button
            className="h-16 rounded-2xl bg-neutral-100 px-12 text-[2.05rem] font-semibold tracking-[-0.01em] text-neutral-900 hover:bg-neutral-100/95"
            size="lg"
          >
            <Plus className="size-8!" strokeWidth={2.7} />
            New workflow
          </Button>
        </EmptyContent>
      </Empty>
    </main>
  )
}
