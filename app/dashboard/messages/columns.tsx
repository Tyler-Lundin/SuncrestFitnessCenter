
"use client"

import { ColumnDef } from "@tanstack/react-table"
import type { Message } from "@prisma/client"
import { Checkbox } from "@/components/ui/checkbox"

export const columns: ColumnDef<Message>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "body",
    header: "Message",
    cell: ({ row }) => (
      <div className="">{row.original.body.slice(0, 45)}{row.original.body.length >= 45 && '...'}</div>
    ),

  },
]
