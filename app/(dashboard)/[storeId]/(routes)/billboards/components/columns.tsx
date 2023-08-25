"use client"

import { ColumnDef } from "@tanstack/react-table"

export type BillboardColummn = {
  id: string
  label: string
  createdAt: string
}

export const columns: ColumnDef<BillboardColummn>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
]
