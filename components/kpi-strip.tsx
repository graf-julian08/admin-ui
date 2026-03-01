import { TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface KpiCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
}

function KpiCard({ title, value, change, trend }: KpiCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-md border border-border bg-card p-5">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {title}
      </span>
      <div className="flex flex-col gap-2">
        <span className="font-mono text-2xl font-semibold tracking-tight text-card-foreground">
          {value}
        </span>
        <div
          className={cn(
            "flex w-fit items-center gap-1 rounded-sm px-1.5 py-0.5 text-xs font-medium",
            trend === "up"
              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              : "bg-red-500/10 text-red-600 dark:text-red-400"
          )}
        >
          {trend === "up" ? (
            <TrendingUp className="size-3" />
          ) : (
            <TrendingDown className="size-3" />
          )}
          <span>{change}</span>
        </div>
      </div>
    </div>
  )
}

const KPI_DATA: KpiCardProps[] = [
  {
    title: "Gross Volume",
    value: "CHF 2,847,391",
    change: "+12.5%",
    trend: "up",
  },
  {
    title: "B2B Revenue",
    value: "USD 1,204,018",
    change: "+8.3%",
    trend: "up",
  },
  {
    title: "Active Pre-Orders",
    value: "1,847",
    change: "+23.1%",
    trend: "up",
  },
  {
    title: "Pending POs",
    value: "342",
    change: "-4.2%",
    trend: "down",
  },
]

export function KpiStrip() {
  return (
    <section aria-label="Key performance indicators">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {KPI_DATA.map((kpi) => (
          <KpiCard key={kpi.title} {...kpi} />
        ))}
      </div>
    </section>
  )
}
