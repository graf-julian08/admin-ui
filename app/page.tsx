import { AtlasSidebar } from "@/components/atlas-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { KpiStrip } from "@/components/kpi-strip"
import { LedgerTable } from "@/components/ledger-table"
import { AtlasCommandBar } from "@/components/atlas-command-bar"

export default function Page() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <AtlasSidebar />

      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader />

        <main className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-6 p-6">
            {/* Page title */}
            <div className="flex flex-col gap-1">
              <h1 className="font-serif text-2xl tracking-tight text-foreground">
                CFO Ledger
              </h1>
              <p className="text-sm text-muted-foreground">
                Financial overview and transaction intelligence
              </p>
            </div>

            {/* KPI Strip */}
            <KpiStrip />

            {/* Data Table */}
            <LedgerTable />
          </div>
        </main>
      </div>

      {/* AI Command Bar */}
      <AtlasCommandBar />
    </div>
  )
}
