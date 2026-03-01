"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  BarChart3,
  BookOpen,
  Box,
  ChevronDown,
  Cpu,
  CreditCard,
  FileText,
  Gift,
  Globe,
  Layers,
  LayoutDashboard,
  Mail,
  Package,
  Plug,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Store,
  Truck,
  Users,
  Warehouse,
} from "lucide-react"

interface NavItem {
  label: string
  icon?: React.ReactNode
  href?: string
  active?: boolean
}

interface NavSection {
  title: string
  items: NavItem[]
  defaultOpen?: boolean
}

const NAV_SECTIONS: NavSection[] = [
  {
    title: "Intelligence",
    defaultOpen: true,
    items: [
      { label: "Dashboard", icon: <LayoutDashboard className="size-4" /> },
      { label: "CFO Ledger", icon: <CreditCard className="size-4" />, active: true },
      { label: "Product Analytics", icon: <BarChart3 className="size-4" /> },
    ],
  },
  {
    title: "Catalog",
    defaultOpen: false,
    items: [
      { label: "Products", icon: <Package className="size-4" /> },
      { label: "Product Bundles (BOM)", icon: <Layers className="size-4" /> },
      { label: "Categories", icon: <Box className="size-4" /> },
    ],
  },
  {
    title: "Inventory",
    defaultOpen: false,
    items: [
      { label: "Stock Locations", icon: <Warehouse className="size-4" /> },
      { label: "Stock Transfers", icon: <Truck className="size-4" /> },
    ],
  },
  {
    title: "Orders",
    defaultOpen: false,
    items: [
      { label: "All Orders", icon: <ShoppingCart className="size-4" /> },
      { label: "Drafts", icon: <FileText className="size-4" /> },
      { label: "Pre-Order Campaigns", icon: <BookOpen className="size-4" /> },
    ],
  },
  {
    title: "CRM",
    defaultOpen: false,
    items: [
      { label: "Customers", icon: <Users className="size-4" /> },
      { label: "B2B Accounts", icon: <Store className="size-4" /> },
      { label: "Unified Inbox", icon: <Mail className="size-4" /> },
    ],
  },
  {
    title: "Marketing",
    defaultOpen: false,
    items: [
      { label: "Promotions", icon: <Gift className="size-4" /> },
      { label: "Gift Cards", icon: <CreditCard className="size-4" /> },
      { label: "Affiliates", icon: <Users className="size-4" /> },
    ],
  },
  {
    title: "Global Ops",
    defaultOpen: false,
    items: [
      { label: "Regions", icon: <Globe className="size-4" /> },
      { label: "Shipping Profiles", icon: <Truck className="size-4" /> },
      { label: "Taxes", icon: <FileText className="size-4" /> },
    ],
  },
  {
    title: "Sales Channels",
    defaultOpen: false,
    items: [
      { label: "B2C Web", icon: <Globe className="size-4" /> },
      { label: "Wholesale Portal", icon: <Store className="size-4" /> },
      { label: "POS Registers", icon: <CreditCard className="size-4" /> },
    ],
  },
  {
    title: "CMS",
    defaultOpen: false,
    items: [
      { label: "Pages", icon: <FileText className="size-4" /> },
      { label: "Themes & Navigation", icon: <Layers className="size-4" /> },
    ],
  },
  {
    title: "Automation",
    defaultOpen: false,
    items: [
      { label: "Flows", icon: <Cpu className="size-4" /> },
      { label: "Draft Actions", icon: <ShieldCheck className="size-4" /> },
    ],
  },
  {
    title: "Supply Chain",
    defaultOpen: false,
    items: [
      { label: "Suppliers", icon: <Users className="size-4" /> },
      { label: "Purchase Orders", icon: <FileText className="size-4" /> },
    ],
  },
  {
    title: "System",
    defaultOpen: false,
    items: [
      { label: "Settings", icon: <Settings className="size-4" /> },
      { label: "Team", icon: <Users className="size-4" /> },
      { label: "Audit Logs", icon: <ShieldCheck className="size-4" /> },
      { label: "Data Privacy", icon: <ShieldCheck className="size-4" /> },
    ],
  },
  {
    title: "Apps",
    defaultOpen: false,
    items: [
      { label: "Installed Integrations", icon: <Plug className="size-4" /> },
    ],
  },
]

function SidebarSection({ section }: { section: NavSection }) {
  const [open, setOpen] = useState(section.defaultOpen ?? false)

  return (
    <div className="mb-1">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
      >
        <span>{section.title}</span>
        <ChevronDown
          className={cn(
            "size-3.5 text-muted-foreground transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="mt-0.5 flex flex-col gap-px">
          {section.items.map((item) => (
            <button
              key={item.label}
              className={cn(
                "group relative flex items-center gap-2.5 rounded-sm px-3 py-1.5 text-sm transition-colors",
                item.active
                  ? "bg-active-bg text-foreground"
                  : "text-muted-foreground hover:bg-hover-bg hover:text-foreground"
              )}
            >
              {item.active && (
                <span className="absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full bg-foreground" />
              )}
              <span className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </span>
              <span className="truncate">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function AtlasSidebar() {
  return (
    <aside className="flex h-screen w-[240px] shrink-0 flex-col border-r border-border bg-sidebar">
      {/* Logo */}
      <div className="flex h-14 items-center border-b border-border px-5">
        <span className="text-sm font-semibold tracking-[0.2em] text-foreground">
          ATLAS OS
        </span>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 overflow-y-auto">
        <nav className="flex flex-col gap-0.5 px-2 py-3">
          {NAV_SECTIONS.map((section) => (
            <SidebarSection key={section.title} section={section} />
          ))}
        </nav>
      </ScrollArea>

      {/* Bottom section */}
      <div className="border-t border-border px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex size-7 items-center justify-center rounded-sm bg-secondary text-[10px] font-semibold text-foreground">
            AC
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-foreground">Atlas Corp</span>
            <span className="text-[10px] text-muted-foreground">Enterprise</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
