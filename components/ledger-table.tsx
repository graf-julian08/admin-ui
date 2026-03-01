import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

type TransactionStatus = "Completed" | "Pending" | "Processing" | "Failed"
type TransactionType = "Revenue" | "Refund" | "Fee"

interface Transaction {
  id: string
  type: TransactionType
  reference: string
  amount: string
  date: string
  status: TransactionStatus
}

const TRANSACTIONS: Transaction[] = [
  {
    id: "TXN-2026-00847",
    type: "Revenue",
    reference: "ORD-91204",
    amount: "CHF 24,800.00",
    date: "2026-02-28",
    status: "Completed",
  },
  {
    id: "TXN-2026-00846",
    type: "Revenue",
    reference: "ORD-91198",
    amount: "USD 18,420.00",
    date: "2026-02-28",
    status: "Completed",
  },
  {
    id: "TXN-2026-00845",
    type: "Fee",
    reference: "FEE-PG-0284",
    amount: "CHF -342.50",
    date: "2026-02-28",
    status: "Processing",
  },
  {
    id: "TXN-2026-00844",
    type: "Revenue",
    reference: "PO-B2B-4821",
    amount: "USD 67,100.00",
    date: "2026-02-27",
    status: "Pending",
  },
  {
    id: "TXN-2026-00843",
    type: "Refund",
    reference: "ORD-91187",
    amount: "CHF -1,250.00",
    date: "2026-02-27",
    status: "Completed",
  },
  {
    id: "TXN-2026-00842",
    type: "Revenue",
    reference: "ORD-91182",
    amount: "USD 9,840.00",
    date: "2026-02-27",
    status: "Completed",
  },
  {
    id: "TXN-2026-00841",
    type: "Fee",
    reference: "FEE-PG-0283",
    amount: "USD -128.00",
    date: "2026-02-26",
    status: "Completed",
  },
  {
    id: "TXN-2026-00840",
    type: "Revenue",
    reference: "PO-B2B-4819",
    amount: "CHF 41,200.00",
    date: "2026-02-26",
    status: "Pending",
  },
  {
    id: "TXN-2026-00839",
    type: "Refund",
    reference: "ORD-91170",
    amount: "USD -3,680.00",
    date: "2026-02-26",
    status: "Processing",
  },
  {
    id: "TXN-2026-00838",
    type: "Revenue",
    reference: "ORD-91165",
    amount: "CHF 15,920.00",
    date: "2026-02-25",
    status: "Completed",
  },
  {
    id: "TXN-2026-00837",
    type: "Revenue",
    reference: "PO-B2B-4817",
    amount: "USD 88,450.00",
    date: "2026-02-25",
    status: "Completed",
  },
  {
    id: "TXN-2026-00836",
    type: "Fee",
    reference: "FEE-PG-0282",
    amount: "CHF -567.80",
    date: "2026-02-25",
    status: "Completed",
  },
]

const statusStyles: Record<TransactionStatus, string> = {
  Completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Pending: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Processing: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Failed: "bg-red-500/10 text-red-400 border-red-500/20",
}

const typeStyles: Record<TransactionType, string> = {
  Revenue: "text-foreground",
  Refund: "text-muted-foreground",
  Fee: "text-muted-foreground",
}

export function LedgerTable() {
  return (
    <section aria-label="CFO Ledger transactions" className="rounded-md border border-border bg-card">
      {/* Table header area */}
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <h2 className="font-serif text-base text-foreground">Recent Transactions</h2>
        <span className="text-xs text-muted-foreground">
          {TRANSACTIONS.length} entries
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-5 py-3 text-left text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Transaction ID
              </th>
              <th className="px-5 py-3 text-left text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Type
              </th>
              <th className="px-5 py-3 text-left text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Reference
              </th>
              <th className="px-5 py-3 text-right text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Amount
              </th>
              <th className="px-5 py-3 text-left text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Date
              </th>
              <th className="px-5 py-3 text-right text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {TRANSACTIONS.map((txn, idx) => (
              <tr
                key={txn.id}
                className={cn(
                  "group transition-colors hover:bg-[rgba(255,255,255,0.02)]",
                  idx < TRANSACTIONS.length - 1 && "border-b border-border"
                )}
              >
                <td className="px-5 py-3">
                  <span className="font-mono text-xs text-foreground">{txn.id}</span>
                </td>
                <td className="px-5 py-3">
                  <span className={cn("text-xs", typeStyles[txn.type])}>
                    {txn.type}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span className="font-mono text-xs text-muted-foreground">
                    {txn.reference}
                  </span>
                </td>
                <td className="px-5 py-3 text-right">
                  <span
                    className={cn(
                      "font-mono text-xs font-medium",
                      txn.amount.startsWith("-")
                        ? "text-muted-foreground"
                        : "text-foreground"
                    )}
                  >
                    {txn.amount}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span className="text-xs text-muted-foreground">{txn.date}</span>
                </td>
                <td className="px-5 py-3 text-right">
                  <Badge
                    variant="outline"
                    className={cn(
                      "rounded-sm text-[10px] font-medium",
                      statusStyles[txn.status]
                    )}
                  >
                    {txn.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
