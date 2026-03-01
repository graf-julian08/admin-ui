import { Search } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur-md">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-sm" aria-label="Breadcrumb">
        <span className="text-muted-foreground">Intelligence</span>
        <span className="text-muted-foreground/50">/</span>
        <span className="font-serif text-foreground">CFO Ledger</span>
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Global Search */}
        <button className="group flex h-8 w-56 items-center gap-2 rounded-md border border-border bg-[rgba(255,255,255,0.03)] px-3 text-sm text-muted-foreground transition-colors hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.05)]">
          <Search className="size-3.5 shrink-0" />
          <span className="flex-1 text-left text-xs">Search...</span>
          <kbd className="ml-auto flex h-5 items-center gap-0.5 rounded border border-border bg-secondary px-1.5 font-mono text-[10px] text-muted-foreground">
            <span className="text-xs">{"⌘"}</span>K
          </kbd>
        </button>

        {/* User Avatar */}
        <div className="flex size-8 items-center justify-center rounded-md bg-secondary text-xs font-medium text-foreground">
          JD
        </div>
      </div>
    </header>
  )
}
