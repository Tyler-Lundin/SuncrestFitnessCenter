
"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState } from "react"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    state: {
      rowSelection,
    },
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
  })

  const handleSelectedAction = async (e: any) => {
    e.preventDefault();
    const action = e.target.name.split("-")[1]
    const ids = table.getRowModel().rows.filter((row) => row.getIsSelected()).map((row) => row.original?.id)
    if (ids.length === 0) return alert("No messages selected.")
    const confirmed = confirm(`Are you sure you want to ${action} ${ids.length} ${ids.length === 1 ? 'message' : 'messages'}?`)
    if (!confirmed) return
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ids, action })
      })
      if (res.ok) {
        alert(`Successfully ${action === 'delete' ? 'deleted' : 'archived'} messages.`)
        console.log(res.json())
        window.location.reload()
      }

    } catch (error: any) {

      console.log(error)
      alert(`Error ${action === 'delete' ? 'deleting' : 'archiving'} messages.`)
    }
  }

  return (
    <div className="rounded-md border">
      <div className="flex justify-between items-center px-4 py-2 border-b">
        <div className="flex items-center space-x-2">
          <button name="action-archive" disabled={table.getSelectedRowModel().rows.length === 0} className="btn btn-sm btn-secondary" onClick={handleSelectedAction}>Archive selected</button>
          <button name="action-delete" disabled={table.getSelectedRowModel().rows.length === 0} className="btn btn-sm btn-error" onClick={handleSelectedAction}>Delete selected</button>
        </div>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
