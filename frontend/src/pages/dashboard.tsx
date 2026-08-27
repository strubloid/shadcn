import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import data from "@/app/dashboard/data.json"
import type { z } from "zod"
import type { schema as dataSchema } from "@/components/data-table"

export function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
        <DataTable data={data as z.infer<typeof dataSchema>[]} />
      </div>
    </div>
  )
}
