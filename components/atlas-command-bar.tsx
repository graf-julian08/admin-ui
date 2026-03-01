"use client"

import { useState } from "react"
import { Sparkles, X, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SUGGESTIONS = [
  "Show me revenue breakdown by region",
  "What are the top 5 products by margin?",
  "Generate a P&L for Q1 2026",
  "Find all pending purchase orders over $50k",
]

export function AtlasCommandBar() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")

  return (
    <>
      {/* Floating trigger */}
      {!open && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
          <button
            onClick={() => setOpen(true)}
            className="group relative flex h-11 items-center gap-3 rounded-md border border-border bg-card/90 px-5 shadow-2xl backdrop-blur-md transition-all hover:border-[rgba(255,255,255,0.12)] hover:bg-card"
          >
            {/* Subtle shimmer effect */}
            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.03)] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <Sparkles className="size-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Command Atlas...
            </span>
            <kbd className="ml-4 flex h-5 items-center gap-0.5 rounded border border-border bg-secondary px-1.5 font-mono text-[10px] text-muted-foreground">
              <span className="text-xs">{"⌘"}</span>J
            </kbd>
          </button>
        </div>
      )}

      {/* Expanded command panel */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center pb-6 sm:items-center sm:pb-0">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="relative w-full max-w-xl mx-4 rounded-md border border-border bg-card shadow-2xl">
            {/* Input area */}
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Sparkles className="size-4 shrink-0 text-muted-foreground" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask Atlas anything about your business..."
                className="h-12 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
              <button
                onClick={() => setOpen(false)}
                className="flex size-6 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="size-3.5" />
              </button>
            </div>

            {/* Suggestions */}
            <div className="flex flex-col gap-px p-2">
              <span className="px-2 py-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Suggestions
              </span>
              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setQuery(suggestion)}
                  className={cn(
                    "group flex items-center justify-between rounded-sm px-2 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-[rgba(255,255,255,0.04)] hover:text-foreground"
                  )}
                >
                  <span>{suggestion}</span>
                  <ArrowRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-border px-4 py-2.5">
              <span className="text-[10px] text-muted-foreground">
                Atlas AI can control the entire ERP system
              </span>
              <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <kbd className="rounded border border-border bg-secondary px-1 py-0.5 font-mono">Esc</kbd>
                <span>to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
